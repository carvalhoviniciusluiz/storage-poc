import { UsecaseFactory } from "~/domain/factory";
import { HttpServer } from "./express-adapter";
import { multerMiddleware } from "../middleware";

export class MainController {
  constructor (httpServer: HttpServer, usecaseFactory: UsecaseFactory) {
    httpServer.on("post", "/upload", multerMiddleware.single('file'), async (
      params: any,
      body: any,
      file: any
    ) => {
      console.log(file);
    });
  }
}
