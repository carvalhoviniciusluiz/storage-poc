export interface DownloadFile {
  execute(input: DownloadFile.Input): Promise<DownloadFile.Output>
}

export namespace DownloadFile {
  export type Input = {
    fileName: string;
  }
  export type Output = void
}
