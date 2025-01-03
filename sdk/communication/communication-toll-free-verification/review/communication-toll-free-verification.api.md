## API Report File for "@azure-tools/communication-toll-free-verification"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { CommonClientOptions } from '@azure/core-client';
import * as coreClient from '@azure/core-client';
import type { KeyCredential } from '@azure/core-auth';
import type { PagedAsyncIterableIterator } from '@azure/core-paging';
import type { TokenCredential } from '@azure/core-auth';

// @public (undocumented)
export interface Address {
    addressLine1?: string;
    addressLine2?: string;
    administrativeDivision?: string;
    country?: string;
    locality?: string;
    postalCode?: string;
}

// @public
export type AttachmentType = "optInSmsKeyword" | "optInIVR" | "optInPointOfSale" | "optInWebsite" | "optInPaperForm" | "optInOther" | "optInDescription";

// @public (undocumented)
export interface BusinessInformation {
    // (undocumented)
    address?: Address;
    companyName?: string;
    companyUrl?: string;
}

// @public (undocumented)
export const BusinessInformationMapper: coreClient.CompositeMapper;

// @public (undocumented)
export interface BusinessPointOfContact {
    // (undocumented)
    address?: Address;
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
}

// @public (undocumented)
export const BusinessPointOfContactMapper: coreClient.CompositeMapper;

// @public (undocumented)
export interface CampaignBrief {
    additionalInformation?: string;
    attachments?: CampaignBriefAttachmentSummary[];
    // (undocumented)
    businessInformation?: BusinessInformation;
    // (undocumented)
    businessPointOfContact?: BusinessPointOfContact;
    countryCode?: string;
    estimatedMonthlyVolume?: EstimatedMonthlyVolume;
    id: string;
    // (undocumented)
    multipleNumbersJustification?: string;
    // (undocumented)
    optInDetails?: OptInDetails;
    phoneNumbers?: string[];
    reviewNotes?: ReviewNote[];
    status?: CampaignBriefStatus;
    statusUpdatedDate?: Date;
    submissionDate?: Date;
    // (undocumented)
    useCaseInfo?: UseCaseInfo;
}

// @public
export interface CampaignBriefAttachment {
    fileContentBase64: string;
    fileName: string;
    fileSizeInBytes?: number;
    fileType: FileType;
    id: string;
    type: AttachmentType;
}

// @public
export interface CampaignBriefAttachments {
    attachments?: CampaignBriefAttachment[];
    nextLink?: string;
}

// @public
export interface CampaignBriefAttachmentSummary {
    fileName?: string;
    id?: string;
    type?: AttachmentType;
}

// @public
export interface CampaignBriefs {
    campaignBriefs?: CampaignBrief[];
    nextLink?: string;
}

// @public
export type CampaignBriefStatus = "submitted" | "approved" | "updateRequested" | "draft" | "cancelled" | "denied";

// @public
export interface CampaignBriefSummaries {
    campaignBriefSummaries?: CampaignBriefSummary[];
    nextLink?: string;
}

// @public
export interface CampaignBriefSummary {
    briefType?: "tollfreeVerification";
    countryCode?: string;
    id?: string;
    phoneNumbers?: string[];
    status?: CampaignBriefStatus;
}

// @public
export type CampaignBriefUseCaseType = "TwoFactorAuthentication" | "AppNotifications" | "Appointments" | "Auctions" | "AutoRepairServices" | "BankTransfers" | "Billing" | "BookingConfirmations" | "BusinessUpdates" | "CareerTraining" | "Chatbot" | "ConversationalOrAlerts" | "CourierServicesAndDeliveries" | "COVID19Alerts" | "EmergencyAlerts" | "EventsAndPlanning" | "FinancialServices" | "FraudAlerts" | "Fundraising" | "GeneralMarketing" | "GeneralSchoolUpdates" | "HealthcareAlerts" | "HousingCommunityUpdates" | "HROrStaffing" | "InsuranceServices" | "JobDispatch" | "LegalServices" | "Mixed" | "MotivationalReminders" | "NotaryNotifications" | "OrderNotifications" | "Political" | "Works" | "RealEstateServices" | "ReligiousServices" | "RepairAndDiagnosticsAlerts" | "RewardsProgram" | "Surveys" | "SystemAlerts" | "VotingReminders" | "WaitlistAlerts" | "WebinarReminders" | "WorkshopAlerts" | "Other";

// @public
export type EstimatedMonthlyVolume = "V10" | "V100" | "V1000" | "V10000" | "V100000" | "V250000" | "V500000" | "V750000" | "V1000000" | "V5000000" | "V10000000OrMore";

// @public
export type FileType = "png" | "jpg" | "jpeg" | "pdf";

// @public (undocumented)
export interface OptInDetails {
    // (undocumented)
    description?: string;
    // (undocumented)
    options?: Option_2[];
}

// @public (undocumented)
interface Option_2 {
    // (undocumented)
    imageUrls?: string[];
    // (undocumented)
    type: Type;
}
export { Option_2 as Option }

// @public
export interface ReviewNote {
    date?: Date;
    message?: string;
}

// @public (undocumented)
export class TollFreeVerificationClient {
    constructor(connectionString: string, options?: TollFreeVerificationClientOptions);
    constructor(endpoint: string, credential: KeyCredential, options?: TollFreeVerificationClientOptions);
    constructor(endpoint: string, credential: TokenCredential, options?: TollFreeVerificationClientOptions);
    // (undocumented)
    deleteCampaignBrief(campaignBriefId: string, countryCode: string, options?: TollFreeVerificationDeleteCampaignBriefOptionalParams): Promise<void>;
    // (undocumented)
    deleteCampaignBriefAttachment(campaignBriefId: string, attachmentId: string, countryCode: string, options?: TollFreeVerificationDeleteCampaignBriefAttachmentOptionalParams): Promise<void>;
    // (undocumented)
    getCampaignBrief(campaignBriefId: string, countryCode: string, options?: TollFreeVerificationGetCampaignBriefOptionalParams): Promise<CampaignBrief>;
    // (undocumented)
    getCampaignBriefAttachment(countryCode: string, campaignBriefId: string, attachmentId: string, options?: TollFreeVerificationGetCampaignBriefAttachmentOptionalParams): Promise<CampaignBrief>;
    // (undocumented)
    listCampaignBriefAttachments(countryCode: string, campaignBriefId: string, options?: TollFreeVerificationGetCampaignBriefAttachmentsOptionalParams): PagedAsyncIterableIterator<CampaignBrief>;
    // (undocumented)
    listCampaignBriefs(options?: TollFreeVerificationGetAllCampaignBriefSummariesOptionalParams): PagedAsyncIterableIterator<CampaignBriefSummary>;
    // (undocumented)
    submitCampaignBrief(campaignBriefId: string, countryCode: string, options?: TollFreeVerificationSubmitCampaignBriefOptionalParams): Promise<TollFreeVerificationSubmitCampaignBriefResponse>;
    // (undocumented)
    upsertCampaignBrief(campaignBriefId: string, countryCode: string, options?: TollFreeVerificationUpsertCampaignBriefOptionalParams): Promise<CampaignBrief>;
    // (undocumented)
    upsertCampaignBriefAttachment(countryCode: string, campaignBriefId: string, attachmentId: string, attachmentType: AttachmentType, fileName: string, fileType: FileType, fileContentBase64: string, options?: TollFreeVerificationCreateOrReplaceCampaignBriefAttachmentOptionalParams): Promise<CampaignBriefAttachment>;
}

// @public
export interface TollFreeVerificationClientOptions extends CommonClientOptions {
}

// @public
export interface TollFreeVerificationCreateOrReplaceCampaignBriefAttachmentOptionalParams extends coreClient.OperationOptions {
    fileSizeInBytes?: number;
}

// @public
export type TollFreeVerificationCreateOrReplaceCampaignBriefAttachmentResponse = CampaignBriefAttachment;

// @public
export interface TollFreeVerificationDeleteCampaignBriefAttachmentOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface TollFreeVerificationDeleteCampaignBriefOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface TollFreeVerificationGetAllCampaignBriefsByCountryCodeOptionalParams extends coreClient.OperationOptions {
    skip?: number;
    top?: number;
}

// @public
export interface TollFreeVerificationGetAllCampaignBriefSummariesOptionalParams extends coreClient.OperationOptions {
    skip?: number;
    top?: number;
}

// @public
export interface TollFreeVerificationGetCampaignBriefAttachmentOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface TollFreeVerificationGetCampaignBriefAttachmentsOptionalParams extends coreClient.OperationOptions {
    skip?: number;
    top?: number;
}

// @public
export interface TollFreeVerificationGetCampaignBriefOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface TollFreeVerificationSubmitCampaignBriefOptionalParams extends coreClient.OperationOptions {
}

// @public
export type TollFreeVerificationSubmitCampaignBriefResponse = CampaignBrief;

// @public
export interface TollFreeVerificationUpsertCampaignBriefOptionalParams extends coreClient.OperationOptions {
    body?: CampaignBrief;
}

// @public
export type TollFreeVerificationUpsertCampaignBriefResponse = CampaignBrief;

// @public
export type Type = "keywordSMS" | "website" | "interactiveVoiceResponse" | "pointOfSale" | "paperForm" | "other";

// @public (undocumented)
export interface UseCaseInfo {
    sampleMessages?: string[];
    useCase?: CampaignBriefUseCaseType;
    useCaseSummary?: string;
}

// (No @packageDocumentation comment for this package)

```
