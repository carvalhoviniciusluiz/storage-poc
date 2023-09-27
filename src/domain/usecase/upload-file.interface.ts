export interface UploadFile {
  execute(input: UploadFile.Input): Promise<UploadFile.Output>
}

export namespace UploadFile {
  export type Input = {
    file: {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      destination: string;
      filename: string;
      path: string;
      size: number;
    }
  }
  export type Output = void
}
