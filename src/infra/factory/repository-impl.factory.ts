import { RepositoryFactory } from '~/application/protocols/factory';
import { AzureStorageAdapter } from '../cache/storage';
// import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
// import { AZURE_BLOB_NAME, AZURE_CONNECTION_STRING, AZURE_CONTAINER_NAME } from '../config/constants';

export class RepositoryImplFactory implements RepositoryFactory {
  createAzureStorageAdapter() {
    // const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONNECTION_STRING);
    // const containerClient = blobServiceClient.getContainerClient(AZURE_CONTAINER_NAME);
    // const storage = containerClient.getBlockBlobClient(AZURE_BLOB_NAME);

    // storage fake
    const AzureStorage = class {
      async uploadFile(filePath: string) {
        console.log('AzureStorage#uploadFile', filePath)
      }
      async downloadToFile(fileName: string) {
        console.log('AzureStorage#downloadToFile',fileName)
      }
    }
    const storage = new AzureStorage();

    return new AzureStorageAdapter(storage);
  }
}
