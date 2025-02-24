/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  BackupsMigrationRequest,
  BackupsUnderAccountMigrateBackupsOptionalParams,
  BackupsUnderAccountMigrateBackupsResponse,
} from "../models/index.js";

/** Interface representing a BackupsUnderAccount. */
export interface BackupsUnderAccount {
  /**
   * Migrate the backups under a NetApp account to backup vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param body Migrate backups under an account payload supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginMigrateBackups(
    resourceGroupName: string,
    accountName: string,
    body: BackupsMigrationRequest,
    options?: BackupsUnderAccountMigrateBackupsOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BackupsUnderAccountMigrateBackupsResponse>,
      BackupsUnderAccountMigrateBackupsResponse
    >
  >;
  /**
   * Migrate the backups under a NetApp account to backup vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param body Migrate backups under an account payload supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginMigrateBackupsAndWait(
    resourceGroupName: string,
    accountName: string,
    body: BackupsMigrationRequest,
    options?: BackupsUnderAccountMigrateBackupsOptionalParams,
  ): Promise<BackupsUnderAccountMigrateBackupsResponse>;
}
