// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Constants, OperationType } from "../common/constants";
import { sleep } from "../common/helper";
import { StatusCodes, SubStatusCodes } from "../common/statusCodes";
import { DiagnosticNodeInternal, DiagnosticNodeType } from "../diagnostics/DiagnosticNodeInternal";
import { ErrorResponse, Response } from "../request";
import { RequestContext } from "../request/RequestContext";
import { TimeoutErrorCode } from "../request/TimeoutError";
import { addDignosticChild } from "../utils/diagnostics";
import { getCurrentTimestampInMs } from "../utils/time";
import { DefaultRetryPolicy } from "./defaultRetryPolicy";
import { EndpointDiscoveryRetryPolicy } from "./endpointDiscoveryRetryPolicy";
import { ResourceThrottleRetryPolicy } from "./resourceThrottleRetryPolicy";
import { RetryContext } from "./RetryContext";
import { RetryPolicy } from "./RetryPolicy";
import { SessionRetryPolicy } from "./sessionRetryPolicy";
import { TimeoutFailoverRetryPolicy } from "./timeoutFailoverRetryPolicy";

/**
 * @hidden
 */
interface ExecuteArgs {
  retryContext?: RetryContext;
  diagnosticNode: DiagnosticNodeInternal;
  retryPolicies?: RetryPolicies;
  requestContext: RequestContext;
  executeRequest: (
    diagnosticNode: DiagnosticNodeInternal,
    requestContext: RequestContext,
  ) => Promise<Response<any>>;
}

/**
 * @hidden
 */
interface RetryPolicies {
  endpointDiscoveryRetryPolicy: EndpointDiscoveryRetryPolicy;
  resourceThrottleRetryPolicy: ResourceThrottleRetryPolicy;
  sessionReadRetryPolicy: SessionRetryPolicy;
  defaultRetryPolicy: DefaultRetryPolicy;
  timeoutFailoverRetryPolicy: TimeoutFailoverRetryPolicy;
}

/**
 * @hidden
 */
export async function execute({
  diagnosticNode,
  retryContext = { retryCount: 0 },
  retryPolicies,
  requestContext,
  executeRequest,
}: ExecuteArgs): Promise<Response<any>> {
  // TODO: any response
  return addDignosticChild(
    async (localDiagnosticNode: DiagnosticNodeInternal) => {
      localDiagnosticNode.addData({ requestAttempNumber: retryContext.retryCount });
      if (!retryPolicies) {
        retryPolicies = {
          endpointDiscoveryRetryPolicy: new EndpointDiscoveryRetryPolicy(
            requestContext.globalEndpointManager,
            requestContext.operationType,
          ),
          resourceThrottleRetryPolicy: new ResourceThrottleRetryPolicy(
            requestContext.connectionPolicy.retryOptions.maxRetryAttemptCount,
            requestContext.connectionPolicy.retryOptions.fixedRetryIntervalInMilliseconds,
            requestContext.connectionPolicy.retryOptions.maxWaitTimeInSeconds,
          ),
          sessionReadRetryPolicy: new SessionRetryPolicy(
            requestContext.globalEndpointManager,
            requestContext.resourceType,
            requestContext.operationType,
            requestContext.connectionPolicy,
          ),
          defaultRetryPolicy: new DefaultRetryPolicy(requestContext.operationType),
          timeoutFailoverRetryPolicy: new TimeoutFailoverRetryPolicy(
            requestContext.globalEndpointManager,
            requestContext.headers,
            requestContext.method,
            requestContext.resourceType,
            requestContext.operationType,
            requestContext.connectionPolicy.enableEndpointDiscovery,
          ),
        };
      }
      if (retryContext && retryContext.clearSessionTokenNotAvailable) {
        requestContext.client.clearSessionToken(requestContext.path);
        delete requestContext.headers["x-ms-session-token"];
      }
      if (retryContext && retryContext.retryLocationServerIndex) {
        requestContext.endpoint = await requestContext.globalEndpointManager.resolveServiceEndpoint(
          localDiagnosticNode,
          requestContext.resourceType,
          requestContext.operationType,
          retryContext.retryLocationServerIndex,
        );
      } else {
        requestContext.endpoint = await requestContext.globalEndpointManager.resolveServiceEndpoint(
          localDiagnosticNode,
          requestContext.resourceType,
          requestContext.operationType,
        );
      }
      const startTimeUTCInMs = getCurrentTimestampInMs();
      const correlatedActivityId =
        requestContext.headers[Constants.HttpHeaders.CorrelatedActivityId];
      try {
        const response = await executeRequest(localDiagnosticNode, requestContext);
        response.headers[Constants.ThrottleRetryCount] =
          retryPolicies.resourceThrottleRetryPolicy.currentRetryAttemptCount;
        response.headers[Constants.ThrottleRetryWaitTimeInMs] =
          retryPolicies.resourceThrottleRetryPolicy.cummulativeWaitTimeinMs;
        if (correlatedActivityId) {
          response.headers[Constants.HttpHeaders.CorrelatedActivityId] = correlatedActivityId;
        }
        // if operation is bulk with multistatus (207) code, we need to retry failed operations
        if (
          requestContext.operationType === OperationType.Batch &&
          !requestContext.headers[Constants.HttpHeaders.IsBatchAtomic] &&
          response.code === StatusCodes.MultiStatus
        ) {
          const finalResponse: Response<any> = {
            ...response,
            result: [],
          };

          return await executeBulkRetry(
            diagnosticNode,
            retryContext,
            retryPolicies,
            requestContext,
            response,
            finalResponse,
            executeRequest,
          );
        }
        return response;
      } catch (err: any) {
        // TODO: any error
        let retryPolicy: RetryPolicy = null;
        const headers = err.headers || {};
        if (correlatedActivityId) {
          headers[Constants.HttpHeaders.CorrelatedActivityId] = correlatedActivityId;
        }
        if (
          err.code === StatusCodes.ENOTFOUND ||
          err.code === "REQUEST_SEND_ERROR" ||
          (err.code === StatusCodes.Forbidden &&
            (err.substatus === SubStatusCodes.DatabaseAccountNotFound ||
              err.substatus === SubStatusCodes.WriteForbidden))
        ) {
          retryPolicy = retryPolicies.endpointDiscoveryRetryPolicy;
        } else if (err.code === StatusCodes.TooManyRequests) {
          retryPolicy = retryPolicies.resourceThrottleRetryPolicy;
        } else if (
          err.code === StatusCodes.NotFound &&
          err.substatus === SubStatusCodes.ReadSessionNotAvailable
        ) {
          retryPolicy = retryPolicies.sessionReadRetryPolicy;
        } else if (err.code === StatusCodes.ServiceUnavailable || err.code === TimeoutErrorCode) {
          retryPolicy = retryPolicies.timeoutFailoverRetryPolicy;
        } else {
          retryPolicy = retryPolicies.defaultRetryPolicy;
        }
        const results = await retryPolicy.shouldRetry(
          err,
          localDiagnosticNode,
          retryContext,
          requestContext.endpoint,
        );
        if (!results) {
          headers[Constants.ThrottleRetryCount] =
            retryPolicies.resourceThrottleRetryPolicy.currentRetryAttemptCount;
          headers[Constants.ThrottleRetryWaitTimeInMs] =
            retryPolicies.resourceThrottleRetryPolicy.cummulativeWaitTimeinMs;
          err.headers = { ...err.headers, ...headers };
          throw err;
        } else {
          requestContext.retryCount++;
          const newUrl = (results as any)[1]; // TODO: any hack
          if (newUrl !== undefined) {
            requestContext.endpoint = newUrl;
          }
          localDiagnosticNode.recordFailedNetworkCall(
            startTimeUTCInMs,
            requestContext,
            retryContext.retryCount,
            err.code,
            err.subsstatusCode,
            headers,
          );
          await sleep(retryPolicy.retryAfterInMs);
          return execute({
            diagnosticNode,
            executeRequest,
            requestContext,
            retryContext,
            retryPolicies,
          });
        }
      }
    },
    diagnosticNode,
    DiagnosticNodeType.HTTP_REQUEST,
  );
}

async function executeBulkRetry(
  diagnosticNode: DiagnosticNodeInternal,
  retryContext: RetryContext,
  retryPolicies: RetryPolicies,
  requestContext: RequestContext,
  response: Response<any>,
  finalResponse: Response<any>,
  executeRequest: (
    diagnosticNode: DiagnosticNodeInternal,
    requestContext: RequestContext,
  ) => Promise<Response<any>>,
): Promise<any> {
  // Collect all successful responses (status code != 429)
  response.result.forEach((res: any) => {
    if (res.statusCode !== StatusCodes.TooManyRequests) {
      finalResponse.result.push(res);
    }
  });

  // Collect failed operations with status code 429 (Too Many Requests)
  const failedOperations = filterFailedBulkOperations(requestContext.body, response);

  // If there are no failed operations, return the final response
  if (failedOperations.length === 0) {
    return finalResponse;
  }

  // Update the request body to only include the failed operations
  requestContext.body = JSON.stringify(failedOperations);

  const retryPolicy = retryPolicies.resourceThrottleRetryPolicy;
  const err = new ErrorResponse("Too many requests");

  // Check if the retry policy allows a retry
  const retryResults = retryPolicy.shouldRetry(err, diagnosticNode);

  if (retryResults) {
    // Wait for the retryAfter duration before retrying
    await sleep(retryPolicy.retryAfterInMs);

    // Execute the request again for the failed operations
    let retryResponse = await executeRequest(diagnosticNode, requestContext);

    // If the status code is 207 (MultiStatus), call the function recursively to retry further
    if (retryResponse.code === StatusCodes.MultiStatus) {
      await sleep(retryPolicy.retryAfterInMs);
      return executeBulkRetry(
        diagnosticNode,
        retryContext,
        retryPolicies,
        requestContext,
        retryResponse,
        finalResponse,
        executeRequest,
      );
    } else {
      // Collect responses from the retry attempt
      retryResponse.result.forEach((res: any) => {
        if (res.statusCode !== StatusCodes.TooManyRequests) {
          finalResponse.result.push(res);
        }
      });
    }
  }

  // Return the final list of responses after all retries
  return finalResponse;
}

// Helper function to filter failed bulk operations
function filterFailedBulkOperations(operations: any, response: Response<any>) {
  operations = JSON.parse(operations) as any[];
  const failedOperations = operations.filter((_: any, index: any) => {
    return response.result[index].statusCode === StatusCodes.TooManyRequests;
  });
  return failedOperations;
}
