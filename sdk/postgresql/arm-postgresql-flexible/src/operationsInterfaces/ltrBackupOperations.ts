/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  LtrServerBackupOperation,
  LtrBackupOperationsListByServerOptionalParams,
  LtrBackupOperationsGetOptionalParams,
  LtrBackupOperationsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LtrBackupOperations. */
export interface LtrBackupOperations {
  /**
   * Gets the result of the give long term retention backup operations for the flexible server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: LtrBackupOperationsListByServerOptionalParams
  ): PagedAsyncIterableIterator<LtrServerBackupOperation>;
  /**
   * Gets the result of the give long term retention backup operation for the flexible server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param backupName The name of the backup.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    backupName: string,
    options?: LtrBackupOperationsGetOptionalParams
  ): Promise<LtrBackupOperationsGetResponse>;
}