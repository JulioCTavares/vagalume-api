import IEstablishmentRepository from "@modules/establishment/repositories/IEstablishmentRepository";
import Establishment from "@modules/establishment/infra/typeorm/entities/Establishment";
import { injectable, inject } from "tsyringe";

import ErrorsApp from "@shared/errors/ErrorsApp";

interface IRequest {
  establishmentId: string;
}

@injectable()
class ShowEstablishmentUseCase {
  constructor(
    @inject("EstablishmentRepository")
    private establishmentRepository: IEstablishmentRepository
  ) {}

  public async execute({ establishmentId }: IRequest): Promise<Establishment> {
    const establishment = await this.establishmentRepository.findById(
      establishmentId
    );

    if (!establishment) {
      throw new ErrorsApp("Could not find establishment", 404);
    }

    return establishment;
  }
}

export default ShowEstablishmentUseCase;
