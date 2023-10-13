import express, { Request, Response } from "express";

export interface HttpServer {
  on (method: string, url: string, ...handlers: any[]): void;
  listen (port: number): void;
}

export class ExpressAdapter implements HttpServer {
  app: any;

  constructor () {
    this.app = express();
    this.app.use(express.json());
  }

  on(method: string, url: string, ...handlers: any[]): void {
    const [callback, ...middlewares] = handlers.reverse();
    this.app[method](url.replace(/\{|\}/g, ""), ...middlewares.reverse(), async (
      req: Request,
      res: Response
    ) => {
      try {
        const output = await callback({
          query: req.query,
          params: req.params,
          body: req.body,
          file: req.file
        });
        res.json(output);
      } catch (e: any) {
        res.status(422).send(e.message);
      }
    });
  }

  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`running on http://localhost:${port}`)
    });
  }
}
