import Manager from "@modules/manager/infra/typeorm/entities/Manager";
import IManagerRepository from "@modules/manager/repositories/IManagerRepository";
import { inject, injectable } from "tsyringe";
import { compare, hash } from "bcryptjs";
import ErrorsApp from "@shared/errors/ErrorsApp";

interface IRequest {
  managerId: string;
  name: string;
  cpf: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
class UpdateManagerUseCases {
  constructor(
    @inject("ManagerRepository")
    private managerRepository: IManagerRepository
  ) {}

  public async execute({
    managerId,
    name,
    cpf,
    email,
    old_password,
    password,
  }: IRequest): Promise<Manager> {
    const manager = await this.managerRepository.findById(managerId);

    if (!manager) {
      throw new ErrorsApp("Could not find manager", 404);
    }

    const managerUpdateEmail = await this.managerRepository.findById(email);

    if (managerUpdateEmail && managerUpdateEmail.id !== managerId) {
      throw new ErrorsApp("Email already in use", 401);
    }

    if (password && !old_password) {
      throw new ErrorsApp("Old password is needed to update the password", 401);
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, manager.password);

      if (!checkOldPassword) {
        throw new ErrorsApp("Old password is incorrect", 401);
      }
    }

    const hashPassword = await hash(password, 8);

    Object.assign(manager, {
      name,
      cpf,
      email,
      password: hashPassword,
    });

    return this.managerRepository.save(manager);
  }
}

export default UpdateManagerUseCases;
