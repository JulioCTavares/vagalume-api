import Manager from "@modules/manager/infra/typeorm/entities/Manager";
import IManagerRepository from "@modules/manager/repositories/IManagerRepository";
import { inject, injectable } from "tsyringe";
import { compare, hash } from "bcryptjs";

interface IRequest {
  managerId: string;
  name?: string;
  cpf?: string;
  email?: string;
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
      throw new Error("Could not find manager");
    }

    const managerUpdateEmail = await this.managerRepository.findById(email);

    if (managerUpdateEmail && managerUpdateEmail.id !== managerId) {
      throw new Error("Email already in use");
    }

    if (password && !old_password) {
      throw new Error("Old password is needed to update the password");
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, manager.password);

      if (!checkOldPassword) {
        throw new Error("Old password is incorrect");
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
