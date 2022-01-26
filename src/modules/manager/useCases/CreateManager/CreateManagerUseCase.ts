import ICreateManagerDTO from "@modules/manager/dtos/ICreateManagerDTO";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { v4 as uuid } from "uuid";
import Manager from "@modules/manager/infra/typeorm/entities/Manager";
import IManagerRepository from "@modules/manager/repositories/IManagerRepository";

@injectable()
class CreateManagerUseCase {
  constructor(
    @inject("ManagerRepository")
    private managerRepository: IManagerRepository
  ) {}

  public async execute({
    name,
    cpf,
    email,
    password,
  }: ICreateManagerDTO): Promise<Manager> {
    if (!email) {
      throw new Error("Email Incorrect");
    }

    const checkUsetExist = await this.managerRepository.findByEmail(email);

    if (checkUsetExist) {
      throw new Error("Email already exists");
    }

    const passwordHashed = await hash(password, 8);

    const manager = await this.managerRepository.create({
      name,
      cpf,
      email,
      password: passwordHashed,
    });

    return manager;
  }
}

export default CreateManagerUseCase;
