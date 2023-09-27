import { type BlobDownloadResponseParsed, BlobUploadCommonResponse, BlockBlobClient } from "@azure/storage-blob";
import { GetStorage, SetStorage } from "~/application/protocols/cache";

export class AzureStorageAdapter
  implements SetStorage<BlobUploadCommonResponse>, GetStorage<BlobDownloadResponseParsed> {
  constructor(private readonly storage: BlockBlobClient) {}

  async set(filePath: string) {
    return this.storage.uploadFile(filePath);
  }

  async get(fileName: string) {
    return this.storage.downloadToFile(fileName);
  }
}
