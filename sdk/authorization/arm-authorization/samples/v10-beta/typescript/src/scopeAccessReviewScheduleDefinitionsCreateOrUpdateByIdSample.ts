/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  AccessReviewScheduleDefinitionProperties,
  AuthorizationManagementClient
} from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or Update access review schedule definition.
 *
 * @summary Create or Update access review schedule definition.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2021-12-01-preview/examples/PutAccessReviewScheduleDefinition.json
 */
async function putAccessReview() {
  const scope = "subscriptions/fa73e90b-5bf1-45fd-a182-35ce5fc0674d";
  const scheduleDefinitionId = "fa73e90b-5bf1-45fd-a182-35ce5fc0674d";
  const properties: AccessReviewScheduleDefinitionProperties = {};
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.scopeAccessReviewScheduleDefinitions.createOrUpdateById(
    scope,
    scheduleDefinitionId,
    properties
  );
  console.log(result);
}

async function main() {
  putAccessReview();
}

main().catch(console.error);