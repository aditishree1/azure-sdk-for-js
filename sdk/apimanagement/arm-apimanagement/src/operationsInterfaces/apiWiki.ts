/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ApiWikiGetEntityTagOptionalParams,
  ApiWikiGetEntityTagResponse,
  ApiWikiGetOptionalParams,
  ApiWikiGetResponse,
  WikiContract,
  ApiWikiCreateOrUpdateOptionalParams,
  ApiWikiCreateOrUpdateResponse,
  WikiUpdateContract,
  ApiWikiUpdateOptionalParams,
  ApiWikiUpdateResponse,
  ApiWikiDeleteOptionalParams
} from "../models";

/** Interface representing a ApiWiki. */
export interface ApiWiki {
  /**
   * Gets the entity state (Etag) version of the Wiki for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiWikiGetEntityTagOptionalParams
  ): Promise<ApiWikiGetEntityTagResponse>;
  /**
   * Gets the details of the Wiki for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiWikiGetOptionalParams
  ): Promise<ApiWikiGetResponse>;
  /**
   * Creates a new Wiki for an API or updates an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    parameters: WikiContract,
    options?: ApiWikiCreateOrUpdateOptionalParams
  ): Promise<ApiWikiCreateOrUpdateResponse>;
  /**
   * Updates the details of the Wiki for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Wiki Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    ifMatch: string,
    parameters: WikiUpdateContract,
    options?: ApiWikiUpdateOptionalParams
  ): Promise<ApiWikiUpdateResponse>;
  /**
   * Deletes the specified Wiki from an API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    ifMatch: string,
    options?: ApiWikiDeleteOptionalParams
  ): Promise<void>;
}