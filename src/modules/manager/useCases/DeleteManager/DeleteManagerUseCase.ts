import { inject, injectable } from "tsyringe";

import IManagerRepository from "@modules/manager/repositories/IManagerRepository";

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
      throw new Error("Manager not found");
    }

    await this.managerRepository.delete(manager);
  }
}

export default DeleteManagerUseCase;
