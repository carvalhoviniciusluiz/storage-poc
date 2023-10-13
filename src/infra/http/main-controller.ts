import { UsecaseFactory } from "~/domain/factory";
import { HttpServer } from "./express-adapter";
import { multerMiddleware } from "../middleware";

export class MainController {
  constructor (httpServer: HttpServer, usecaseFactory: UsecaseFactory) {
    httpServer.on("post", "/upload", multerMiddleware.single('file'), async ({
      file
    }: any) => {
      const output = await usecaseFactory.createUploadFile().execute(file);
      return output;
    });

    httpServer.on("get", "/download", async ({ query }: any) => {
      const output = await usecaseFactory.createDownloadFile().execute(query);
      return output;
    });
  }
}
