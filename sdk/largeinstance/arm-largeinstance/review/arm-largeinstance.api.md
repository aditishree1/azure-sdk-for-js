## API Report File for "@azure/arm-largeinstance"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { OperationState } from '@azure/core-lro';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { SimplePollerLike } from '@azure/core-lro';

// @public
export type ActionType = string;

// @public
export interface AzureLargeInstance extends TrackedResource {
    properties?: AzureLargeInstanceProperties;
}

// @public
export type AzureLargeInstanceForcePowerState = string;

// @public
export interface AzureLargeInstanceGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AzureLargeInstanceGetResponse = AzureLargeInstance;

// @public
export type AzureLargeInstanceHardwareTypeNamesEnum = string;

// @public
export interface AzureLargeInstanceListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AzureLargeInstanceListByResourceGroupNextResponse = AzureLargeInstanceListResult;

// @public
export interface AzureLargeInstanceListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AzureLargeInstanceListByResourceGroupResponse = AzureLargeInstanceListResult;

// @public
export interface AzureLargeInstanceListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AzureLargeInstanceListBySubscriptionNextResponse = AzureLargeInstanceListResult;

// @public
export interface AzureLargeInstanceListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AzureLargeInstanceListBySubscriptionResponse = AzureLargeInstanceListResult;

// @public
export interface AzureLargeInstanceListResult {
    nextLink?: string;
    value: AzureLargeInstance[];
}

// @public
export interface AzureLargeInstanceOperations {
    beginRestart(resourceGroupName: string, azureLargeInstanceName: string, options?: AzureLargeInstanceRestartOptionalParams): Promise<SimplePollerLike<OperationState<AzureLargeInstanceRestartResponse>, AzureLargeInstanceRestartResponse>>;
    beginRestartAndWait(resourceGroupName: string, azureLargeInstanceName: string, options?: AzureLargeInstanceRestartOptionalParams): Promise<AzureLargeInstanceRestartResponse>;
    beginShutdown(resourceGroupName: string, azureLargeInstanceName: string, options?: AzureLargeInstanceShutdownOptionalParams): Promise<SimplePollerLike<OperationState<AzureLargeInstanceShutdownResponse>, AzureLargeInstanceShutdownResponse>>;
    beginShutdownAndWait(resourceGroupName: string, azureLargeInstanceName: string, options?: AzureLargeInstanceShutdownOptionalParams): Promise<AzureLargeInstanceShutdownResponse>;
    beginStart(resourceGroupName: string, azureLargeInstanceName: string, options?: AzureLargeInstanceStartOptionalParams): Promise<SimplePollerLike<OperationState<AzureLargeInstanceStartResponse>, AzureLargeInstanceStartResponse>>;
    beginStartAndWait(resourceGroupName: string, azureLargeInstanceName: string, options?: AzureLargeInstanceStartOptionalParams): Promise<AzureLargeInstanceStartResponse>;
    get(resourceGroupName: string, azureLargeInstanceName: string, options?: AzureLargeInstanceGetOptionalParams): Promise<AzureLargeInstanceGetResponse>;
    listByResourceGroup(resourceGroupName: string, options?: AzureLargeInstanceListByResourceGroupOptionalParams): PagedAsyncIterableIterator<AzureLargeInstance>;
    listBySubscription(options?: AzureLargeInstanceListBySubscriptionOptionalParams): PagedAsyncIterableIterator<AzureLargeInstance>;
    update(resourceGroupName: string, azureLargeInstanceName: string, tagsParameter: AzureLargeInstanceTagsUpdate, options?: AzureLargeInstanceUpdateOptionalParams): Promise<AzureLargeInstanceUpdateResponse>;
}

// @public
export type AzureLargeInstancePowerStateEnum = string;

// @public
export interface AzureLargeInstanceProperties {
    readonly azureLargeInstanceId?: string;
    hardwareProfile?: HardwareProfile;
    readonly hwRevision?: string;
    networkProfile?: NetworkProfile;
    osProfile?: OsProfile;
    partnerNodeId?: string;
    readonly powerState?: AzureLargeInstancePowerStateEnum;
    readonly provisioningState?: AzureLargeInstanceProvisioningStatesEnum;
    readonly proximityPlacementGroup?: string;
    storageProfile?: StorageProfile;
}

// @public
export type AzureLargeInstanceProvisioningStatesEnum = string;

// @public
export interface AzureLargeInstanceRestartHeaders {
    location?: string;
    retryAfter?: number;
}

// @public
export interface AzureLargeInstanceRestartOptionalParams extends coreClient.OperationOptions {
    forceParameter?: ForceState;
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type AzureLargeInstanceRestartResponse = OperationStatusResult;

// @public
export interface AzureLargeInstanceShutdownHeaders {
    location?: string;
    retryAfter?: number;
}

// @public
export interface AzureLargeInstanceShutdownOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type AzureLargeInstanceShutdownResponse = OperationStatusResult;

// @public
export type AzureLargeInstanceSizeNamesEnum = string;

// @public
export interface AzureLargeInstanceStartHeaders {
    location?: string;
    retryAfter?: number;
}

// @public
export interface AzureLargeInstanceStartOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type AzureLargeInstanceStartResponse = OperationStatusResult;

// @public
export interface AzureLargeInstanceTagsUpdate {
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface AzureLargeInstanceUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AzureLargeInstanceUpdateResponse = AzureLargeInstance;

// @public
export interface AzureLargeStorageInstance extends TrackedResource {
    properties?: AzureLargeStorageInstanceProperties;
}

// @public
export interface AzureLargeStorageInstanceGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AzureLargeStorageInstanceGetResponse = AzureLargeStorageInstance;

// @public
export interface AzureLargeStorageInstanceListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AzureLargeStorageInstanceListByResourceGroupNextResponse = AzureLargeStorageInstanceListResult;

// @public
export interface AzureLargeStorageInstanceListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AzureLargeStorageInstanceListByResourceGroupResponse = AzureLargeStorageInstanceListResult;

// @public
export interface AzureLargeStorageInstanceListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AzureLargeStorageInstanceListBySubscriptionNextResponse = AzureLargeStorageInstanceListResult;

// @public
export interface AzureLargeStorageInstanceListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AzureLargeStorageInstanceListBySubscriptionResponse = AzureLargeStorageInstanceListResult;

// @public
export interface AzureLargeStorageInstanceListResult {
    nextLink?: string;
    value: AzureLargeStorageInstance[];
}

// @public
export interface AzureLargeStorageInstanceOperations {
    get(resourceGroupName: string, azureLargeStorageInstanceName: string, options?: AzureLargeStorageInstanceGetOptionalParams): Promise<AzureLargeStorageInstanceGetResponse>;
    listByResourceGroup(resourceGroupName: string, options?: AzureLargeStorageInstanceListByResourceGroupOptionalParams): PagedAsyncIterableIterator<AzureLargeStorageInstance>;
    listBySubscription(options?: AzureLargeStorageInstanceListBySubscriptionOptionalParams): PagedAsyncIterableIterator<AzureLargeStorageInstance>;
    update(resourceGroupName: string, azureLargeStorageInstanceName: string, tagsParameter: AzureLargeStorageInstanceTagsUpdate, options?: AzureLargeStorageInstanceUpdateOptionalParams): Promise<AzureLargeStorageInstanceUpdateResponse>;
}

// @public
export interface AzureLargeStorageInstanceProperties {
    azureLargeStorageInstanceUniqueIdentifier?: string;
    storageProperties?: StorageProperties;
}

// @public
export interface AzureLargeStorageInstanceTagsUpdate {
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface AzureLargeStorageInstanceUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type AzureLargeStorageInstanceUpdateResponse = AzureLargeStorageInstance;

// @public
export type CreatedByType = string;

// @public
export interface Disk {
    diskSizeGB?: number;
    readonly lun?: number;
    name?: string;
}

// @public
export interface ErrorAdditionalInfo {
    readonly info?: Record<string, unknown>;
    readonly type?: string;
}

// @public
export interface ErrorDetail {
    readonly additionalInfo?: ErrorAdditionalInfo[];
    readonly code?: string;
    readonly details?: ErrorDetail[];
    readonly message?: string;
    readonly target?: string;
}

// @public
export interface ErrorResponse {
    error?: ErrorDetail;
}

// @public
export interface ForceState {
    forceState?: AzureLargeInstanceForcePowerState;
}

// @public
export function getContinuationToken(page: unknown): string | undefined;

// @public
export interface HardwareProfile {
    readonly azureLargeInstanceSize?: AzureLargeInstanceSizeNamesEnum;
    readonly hardwareType?: AzureLargeInstanceHardwareTypeNamesEnum;
}

// @public
export interface IpAddress {
    ipAddress?: string;
}

// @public
export enum KnownActionType {
    Internal = "Internal"
}

// @public
export enum KnownAzureLargeInstanceForcePowerState {
    Active = "active",
    Inactive = "inactive"
}

// @public
export enum KnownAzureLargeInstanceHardwareTypeNamesEnum {
    CiscoUCS = "Cisco_UCS",
    HPE = "HPE",
    Sdflex = "SDFLEX"
}

// @public
export enum KnownAzureLargeInstancePowerStateEnum {
    Restarting = "restarting",
    Started = "started",
    Starting = "starting",
    Stopped = "stopped",
    Stopping = "stopping",
    Unknown = "unknown"
}

// @public
export enum KnownAzureLargeInstanceProvisioningStatesEnum {
    Accepted = "Accepted",
    Canceled = "Canceled",
    Creating = "Creating",
    Deleting = "Deleting",
    Failed = "Failed",
    Migrating = "Migrating",
    Succeeded = "Succeeded",
    Updating = "Updating"
}

// @public
export enum KnownAzureLargeInstanceSizeNamesEnum {
    S112 = "S112",
    S144 = "S144",
    S144M = "S144m",
    S192 = "S192",
    S192M = "S192m",
    S192Xm = "S192xm",
    S224 = "S224",
    S224M = "S224m",
    S224Om = "S224om",
    S224Oo = "S224oo",
    S224Oom = "S224oom",
    S224Ooo = "S224ooo",
    S224Se = "S224se",
    S384 = "S384",
    S384M = "S384m",
    S384Xm = "S384xm",
    S384Xxm = "S384xxm",
    S448 = "S448",
    S448M = "S448m",
    S448Om = "S448om",
    S448Oo = "S448oo",
    S448Oom = "S448oom",
    S448Ooo = "S448ooo",
    S448Se = "S448se",
    S576M = "S576m",
    S576Xm = "S576xm",
    S672 = "S672",
    S672M = "S672m",
    S672Om = "S672om",
    S672Oo = "S672oo",
    S672Oom = "S672oom",
    S672Ooo = "S672ooo",
    S72 = "S72",
    S72M = "S72m",
    S768 = "S768",
    S768M = "S768m",
    S768Xm = "S768xm",
    S896 = "S896",
    S896M = "S896m",
    S896Om = "S896om",
    S896Oo = "S896oo",
    S896Oom = "S896oom",
    S896Ooo = "S896ooo",
    S96 = "S96",
    S960M = "S960m"
}

// @public
export enum KnownCreatedByType {
    Application = "Application",
    Key = "Key",
    ManagedIdentity = "ManagedIdentity",
    User = "User"
}

// @public
export enum KnownOrigin {
    System = "system",
    User = "user",
    UserSystem = "user,system"
}

// @public
export enum KnownProvisioningState {
    Accepted = "Accepted",
    Canceled = "Canceled",
    Creating = "Creating",
    Deleting = "Deleting",
    Failed = "Failed",
    Migrating = "Migrating",
    Succeeded = "Succeeded",
    Updating = "Updating"
}

// @public
export enum KnownVersions {
    V20230720Preview = "2023-07-20-preview"
}

// @public (undocumented)
export class LargeInstanceManagementClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: LargeInstanceManagementClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    azureLargeInstanceOperations: AzureLargeInstanceOperations;
    // (undocumented)
    azureLargeStorageInstanceOperations: AzureLargeStorageInstanceOperations;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface LargeInstanceManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface NetworkProfile {
    readonly circuitId?: string;
    networkInterfaces?: IpAddress[];
}

// @public
export interface Operation {
    readonly actionType?: ActionType;
    display?: OperationDisplay;
    readonly isDataAction?: boolean;
    readonly name?: string;
    readonly origin?: Origin;
}

// @public
export interface OperationDisplay {
    readonly description?: string;
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationListResult {
    readonly nextLink?: string;
    readonly value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export interface OperationStatusResult {
    endTime?: Date;
    error?: ErrorDetail;
    id?: string;
    name?: string;
    operations?: OperationStatusResult[];
    percentComplete?: number;
    readonly resourceId?: string;
    startTime?: Date;
    status: string;
}

// @public
export type Origin = string;

// @public
export interface OsProfile {
    computerName?: string;
    readonly osType?: string;
    sshPublicKey?: string;
    readonly version?: string;
}

// @public
export type ProvisioningState = string;

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly systemData?: SystemData;
    readonly type?: string;
}

// @public
export interface StorageBillingProperties {
    billingMode?: string;
    sku?: string;
}

// @public
export interface StorageProfile {
    readonly nfsIpAddress?: string;
    osDisks?: Disk[];
}

// @public
export interface StorageProperties {
    generation?: string;
    hardwareType?: AzureLargeInstanceHardwareTypeNamesEnum;
    offeringType?: string;
    readonly provisioningState?: ProvisioningState;
    storageBillingProperties?: StorageBillingProperties;
    storageType?: string;
    workloadType?: string;
}

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// @public
export interface Tags {
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface TrackedResource extends Resource {
    location: string;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type Versions = string;

// (No @packageDocumentation comment for this package)

```
