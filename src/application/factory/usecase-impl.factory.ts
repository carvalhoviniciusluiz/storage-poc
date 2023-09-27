import { UsecaseFactory } from "~/domain/factory";
import { RepositoryFactory } from "../protocols/factory";

export class UsecaseImplFactory implements UsecaseFactory {
  constructor (private readonly repositoryFactory: RepositoryFactory) {}

}
