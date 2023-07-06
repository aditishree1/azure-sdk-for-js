/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  NetworkFabric,
  NetworkFabricsListByResourceGroupOptionalParams,
  NetworkFabricsListBySubscriptionOptionalParams,
  NetworkFabricsCreateOptionalParams,
  NetworkFabricsCreateResponse,
  NetworkFabricsGetOptionalParams,
  NetworkFabricsGetResponse,
  NetworkFabricPatchParameters,
  NetworkFabricsUpdateOptionalParams,
  NetworkFabricsUpdateResponse,
  NetworkFabricsDeleteOptionalParams,
  NetworkFabricsProvisionOptionalParams,
  NetworkFabricsProvisionResponse,
  NetworkFabricsDeprovisionOptionalParams,
  NetworkFabricsDeprovisionResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NetworkFabrics. */
export interface NetworkFabrics {
  /**
   * List all the Network Fabric resources in the given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: NetworkFabricsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<NetworkFabric>;
  /**
   * List all the Network Fabric resources in the given subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: NetworkFabricsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<NetworkFabric>;
  /**
   * Create Network Fabric resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    networkFabricName: string,
    body: NetworkFabric,
    options?: NetworkFabricsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkFabricsCreateResponse>,
      NetworkFabricsCreateResponse
    >
  >;
  /**
   * Create Network Fabric resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    body: NetworkFabric,
    options?: NetworkFabricsCreateOptionalParams
  ): Promise<NetworkFabricsCreateResponse>;
  /**
   * Get Network Fabric resource details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsGetOptionalParams
  ): Promise<NetworkFabricsGetResponse>;
  /**
   * Update certain properties of the Network Fabric resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param body Network Fabric properties to update.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    networkFabricName: string,
    body: NetworkFabricPatchParameters,
    options?: NetworkFabricsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkFabricsUpdateResponse>,
      NetworkFabricsUpdateResponse
    >
  >;
  /**
   * Update certain properties of the Network Fabric resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param body Network Fabric properties to update.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    body: NetworkFabricPatchParameters,
    options?: NetworkFabricsUpdateOptionalParams
  ): Promise<NetworkFabricsUpdateResponse>;
  /**
   * Delete Network Fabric resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete Network Fabric resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Provisions the underlying resources in the given Network Fabric instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the NetworkFabric.
   * @param options The options parameters.
   */
  beginProvision(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsProvisionOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkFabricsProvisionResponse>,
      NetworkFabricsProvisionResponse
    >
  >;
  /**
   * Provisions the underlying resources in the given Network Fabric instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the NetworkFabric.
   * @param options The options parameters.
   */
  beginProvisionAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsProvisionOptionalParams
  ): Promise<NetworkFabricsProvisionResponse>;
  /**
   * Deprovisions the underlying resources in the given Network Fabric instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the NetworkFabric.
   * @param options The options parameters.
   */
  beginDeprovision(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsDeprovisionOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkFabricsDeprovisionResponse>,
      NetworkFabricsDeprovisionResponse
    >
  >;
  /**
   * Deprovisions the underlying resources in the given Network Fabric instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the NetworkFabric.
   * @param options The options parameters.
   */
  beginDeprovisionAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkFabricsDeprovisionOptionalParams
  ): Promise<NetworkFabricsDeprovisionResponse>;
}