import { AzureStorage } from "~/infra/protocols/cache";

export interface AzureStorageClient {
  uploadFile(filePath: string): Promise<any>
  downloadToFile(fileName: string): Promise<any>
}

export class AzureStorageAdapter implements AzureStorage {
  constructor(private readonly storage: AzureStorageClient) {}

  async set(file: any) {
    console.log('AzureStorageAdapter#set', { file })

    return this.storage.uploadFile(file.path);
  }

  async get(fileName: string) {
    console.log('AzureStorageAdapter#get', { fileName })

    return this.storage.downloadToFile(fileName);
  }
}
