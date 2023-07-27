/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Terminates execution of a running container apps job
 *
 * @summary Terminates execution of a running container apps job
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-11-01-preview/examples/Job_Stop_Multiple.json
 */
async function terminateMultipleContainerAppsJob() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPCONTAINERS_RESOURCE_GROUP"] || "rg";
  const jobName = "testcontainerAppsJob0";
  const jobExecutionName = {
    value: [
      { name: "jobExecution-27944453" },
      { name: "jobExecution-27944452" },
      { name: "jobExecution-27944451" },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.jobs.beginStopMultipleExecutionsAndWait(
    resourceGroupName,
    jobName,
    jobExecutionName
  );
  console.log(result);
}

async function main() {
  terminateMultipleContainerAppsJob();
}

main().catch(console.error);