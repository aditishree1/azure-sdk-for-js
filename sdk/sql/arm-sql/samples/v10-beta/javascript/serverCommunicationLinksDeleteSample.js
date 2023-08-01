/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Deletes a server communication link.
 *
 * @summary Deletes a server communication link.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/stable/2014-04-01/examples/ServerCommunicationLinkDelete.json
 */
async function deleteAServerCommunicationLink() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-7398";
  const serverName = "sqlcrudtest-4645";
  const communicationLinkName = "link1";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverCommunicationLinks.delete(
    resourceGroupName,
    serverName,
    communicationLinkName
  );
  console.log(result);
}

async function main() {
  deleteAServerCommunicationLink();
}

main().catch(console.error);