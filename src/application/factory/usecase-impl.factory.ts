import { UsecaseFactory } from "~/domain/factory";
import { RepositoryFactory } from "../protocols/factory";
import { UploadFile } from "~/domain/usecase";
import { UploadFileUseCase } from "../usecase";

export class UsecaseImplFactory implements UsecaseFactory {
  constructor (private readonly repositoryFactory: RepositoryFactory) {}

  createUploadFile(): UploadFile {
    return new UploadFileUseCase(this.repositoryFactory.createAzureStorageAdapter());
  }

}
