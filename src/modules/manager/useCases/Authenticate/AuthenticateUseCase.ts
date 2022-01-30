import Manager from "@modules/manager/infra/typeorm/entities/Manager";
import authConfig from "@config/auth";
import IManagerRepository from "@modules/manager/repositories/IManagerRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import ErrorsApp from "@shared/errors/ErrorsApp";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  manager: Manager;
  token: string;
}

@injectable()
class AuthenticateUseCase {
  constructor(
    @inject("ManagerRepository")
    private managerRepository: IManagerRepository
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const manager = await this.managerRepository.findByEmail(email);

    if (!manager) {
      throw new ErrorsApp("Email or password incorrect", 401);
    }

    const passwordMatched = await compare(password, manager.password);

    if (!passwordMatched) {
      throw new ErrorsApp("Email or password incorrect", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: manager.id,
      expiresIn,
    });

    return {
      manager,
      token,
    };
  }
}
export default AuthenticateUseCase;
