// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "puh38em4",
    dataset: "production",
    apiVersion: "2024-04-28",
    useCdn: false,
};

const client = createClient(config);

export default client;