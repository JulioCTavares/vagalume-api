import { inject, injectable } from "tsyringe";

import IManagerRepository from "@modules/manager/repositories/IManagerRepository";
import ErrorsApp from "@shared/errors/ErrorsApp";

interface IRequest {
  managerId: string;
}

@injectable()
class DeleteManagerUseCase {
  constructor(
    @inject("ManagerRepository")
    private managerRepository: IManagerRepository
  ) {}

  public async execute({ managerId }: IRequest): Promise<void> {
    const manager = await this.managerRepository.findById(managerId);

    if (!manager) {
      throw new ErrorsApp("Manager not found", 404);
    }

    await this.managerRepository.delete(manager);
  }
}

export default DeleteManagerUseCase;
