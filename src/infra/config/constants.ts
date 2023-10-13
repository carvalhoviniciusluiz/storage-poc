require('dotenv').config();

export const AZURE_CONNECTION_STRING = process.env.AZURE_CONNECTION_STRING ?? '';
export const AZURE_CONTAINER_NAME = process.env.AZURE_CONTAINER_NAME ?? '';
export const AZURE_BLOB_NAME = process.env.AZURE_BLOB_NAME ?? '';
