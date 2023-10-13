import { RepositoryFactory } from '~/application/protocols/factory';
import { AzureStorageAdapter } from '../cache/storage';
import { BlobServiceClient } from '@azure/storage-blob';
import { AZURE_BLOB_NAME, AZURE_CONNECTION_STRING, AZURE_CONTAINER_NAME } from '../config/constants';

export class RepositoryImplFactory implements RepositoryFactory {
  createAzureStorageAdapter() {
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient(AZURE_CONTAINER_NAME);
    const storage = containerClient.getBlockBlobClient(AZURE_BLOB_NAME);
    return new AzureStorageAdapter(storage);
  }
}
