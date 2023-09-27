import type { UploadFile } from "~/domain/usecase";
import { AzureStorage } from "~/infra/protocols/cache";

export class UploadFileUseCase implements UploadFile {
  constructor(private readonly storage: AzureStorage) {}

  async execute(input: UploadFile.Input): Promise<void> {
    await this.storage.set(input);
  }
}
