import { UsecaseImplFactory } from "~/application/factory";
import { RepositoryImplFactory } from "~/infra/factory";
import { ExpressAdapter, MainController } from "~/infra/http";

async function main () {
  const repositoryFactory = new RepositoryImplFactory();
  const usecaseFactory = new UsecaseImplFactory(repositoryFactory);
  const httpServer = new ExpressAdapter();
  new MainController(httpServer, usecaseFactory);
  httpServer.listen(3000);
}
main();
