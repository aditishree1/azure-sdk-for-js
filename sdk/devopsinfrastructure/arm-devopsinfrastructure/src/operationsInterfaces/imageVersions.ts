/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ImageVersion,
  ImageVersionsListByImageOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ImageVersions. */
export interface ImageVersions {
  /**
   * List ImageVersion resources by Image
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param imageName Name of the image.
   * @param options The options parameters.
   */
  listByImage(
    resourceGroupName: string,
    imageName: string,
    options?: ImageVersionsListByImageOptionalParams,
  ): PagedAsyncIterableIterator<ImageVersion>;
}
