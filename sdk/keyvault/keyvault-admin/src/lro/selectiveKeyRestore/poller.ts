// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { KeyVaultAdminPollerOptions } from "../keyVaultAdminPoller.js";
import { KeyVaultAdminPoller } from "../keyVaultAdminPoller.js";
import type {
  KeyVaultSelectiveKeyRestoreOperationState,
  KeyVaultSelectiveKeyRestorePollOperationState,
} from "./operation.js";
import { KeyVaultSelectiveKeyRestorePollOperation } from "./operation.js";
import type { KeyVaultSelectiveKeyRestoreResult } from "../../backupClientModels.js";

export interface KeyVaultSelectiveKeyRestorePollerOptions extends KeyVaultAdminPollerOptions {
  keyName: string;
  folderUri: string;
  sasToken?: string;
  folderName: string;
}

/**
 * Class that creates a poller that waits until a key of a Key Vault backup ends up being restored.
 */
export class KeyVaultSelectiveKeyRestorePoller extends KeyVaultAdminPoller<
  KeyVaultSelectiveKeyRestoreOperationState,
  KeyVaultSelectiveKeyRestoreResult
> {
  constructor(options: KeyVaultSelectiveKeyRestorePollerOptions) {
    const {
      client,
      vaultUrl,
      keyName,
      folderUri,
      sasToken,
      folderName,
      requestOptions,
      intervalInMs = 2000,
      resumeFrom,
    } = options;

    let state: KeyVaultSelectiveKeyRestorePollOperationState | undefined;

    if (resumeFrom) {
      state = JSON.parse(resumeFrom).state;
    }

    const operation = new KeyVaultSelectiveKeyRestorePollOperation(
      {
        ...state,
        keyName,
        folderUri: folderUri,
        sasToken,
        folderName,
      },
      vaultUrl,
      client,
      requestOptions,
    );

    super(operation);

    this.intervalInMs = intervalInMs;
  }
}
