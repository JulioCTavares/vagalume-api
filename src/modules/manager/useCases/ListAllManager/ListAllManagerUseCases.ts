import { inject, injectable } from "tsyringe";

import Manager from "@modules/manager/infra/typeorm/entities/Manager";
import IManagerRepository from "@modules/manager/repositories/IManagerRepository";

@injectable()
class ListAllManagerUseCases {
  constructor(
    @inject("ManagerRepository")
    private managerRepository: IManagerRepository
  ) {}

  public async execute(): Promise<Manager[]> {
    const managers = await this.managerRepository.findAll();

    return managers;
  }
}

export default ListAllManagerUseCases;
