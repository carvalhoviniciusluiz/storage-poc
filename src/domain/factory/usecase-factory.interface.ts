import type { UploadFile } from "../usecase";

export interface UsecaseFactory {
  createUploadFile(): UploadFile;
}
