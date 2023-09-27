import { type BlobDownloadResponseParsed, BlobUploadCommonResponse } from "@azure/storage-blob";
import type { GetStorage, SetStorage } from "~/application/protocols/cache";

export interface AzureStorage extends SetStorage<BlobUploadCommonResponse>, GetStorage<BlobDownloadResponseParsed> {}
