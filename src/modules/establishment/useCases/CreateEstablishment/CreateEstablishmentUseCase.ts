import ICreateEstablishmentDTO from "@modules/establishment/dtos/ICreateEstablishmentDTO";
import Establishment from "@modules/establishment/infra/typeorm/entities/Establishment";
import IEstablishmentRepository from "@modules/establishment/repositories/IEstablishmentRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class CreateEstablishmentUseCase {
  constructor(
    @inject("EstablishmentRepository")
    private establishmentRepository: IEstablishmentRepository
  ) {}

  public async execute(data: ICreateEstablishmentDTO): Promise<Establishment> {
    const establishment = await this.establishmentRepository.create(data);

    return establishment;
  }
}

export default CreateEstablishmentUseCase;
