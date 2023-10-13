import { AzureStorage } from "~/infra/protocols/cache";

export interface AzureStorageClient {
  uploadFile(filePath: string): Promise<any>
  downloadToFile(fileName: string): Promise<any>
}

export class AzureStorageAdapter implements AzureStorage {
  constructor(private readonly storage: AzureStorageClient) {}

  async set(file: any) {
    try {
      const output = await this.storage.uploadFile(file.path);

      console.log('AzureStorageAdapter#set', { file, output })

      return output;
    } catch (error) {
      console.log(`AzureStorageAdapter#error`, { error })
    }
  }

  async get(fileName: string) {
    try {
      const output = await this.storage.downloadToFile(fileName);

      console.log('AzureStorageAdapter#get', { fileName, output })

      return output;
    } catch (error) {
      console.log(`AzureStorageAdapter#error`, { error })
    }
  }
}
