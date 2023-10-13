import { UsecaseFactory } from "~/domain/factory";
import { RepositoryFactory } from "../protocols/factory";
import { DownloadFile, UploadFile } from "~/domain/usecase";
import { DownloadFileUseCase, UploadFileUseCase } from "../usecase";

export class UsecaseImplFactory implements UsecaseFactory {
  constructor (private readonly repositoryFactory: RepositoryFactory) {}

  createUploadFile(): UploadFile {
    return new UploadFileUseCase(this.repositoryFactory.createAzureStorageAdapter());
  }

  createDownloadFile(): DownloadFile {
    return new DownloadFileUseCase(this.repositoryFactory.createAzureStorageAdapter());
  }

}
