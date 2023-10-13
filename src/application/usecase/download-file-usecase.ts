import type { DownloadFile } from "~/domain/usecase";
import { AzureStorage } from "~/infra/protocols/cache";

export class DownloadFileUseCase implements DownloadFile {
  constructor(private readonly storage: AzureStorage) {}

  async execute(input: DownloadFile.Input): Promise<DownloadFile.Output> {
    if(!input.fileName) {
      throw new Error(`fileName empty`);
    }
    await this.storage.get(input.fileName);
  }
}
