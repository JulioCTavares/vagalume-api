import IManagerRepository from "@modules/manager/repositories/IManagerRepository";
import Manager from "@modules/manager/infra/typeorm/entities/Manager";
import { injectable, inject } from "tsyringe";

import ErrorsApp from "@shared/errors/ErrorsApp";

interface IRequest {
  managerId: string;
}

@injectable()
class ShowManagerUseCase {
  constructor(
    @inject("ManagerRepository")
    private managerRepository: IManagerRepository
  ) {}

  public async execute({ managerId }: IRequest): Promise<Manager> {
    const manager = await this.managerRepository.findById(managerId);

    if (!manager) {
      throw new ErrorsApp("Could not find manager", 404);
    }

    return manager;
  }
}

export default ShowManagerUseCase;
