import type { DownloadFile, UploadFile } from "../usecase";

export interface UsecaseFactory {
  createUploadFile(): UploadFile;
  createDownloadFile(): DownloadFile;
}
