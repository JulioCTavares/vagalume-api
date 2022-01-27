import { inject, injectable } from "tsyringe";
import Establishment from "@modules/establishment/infra/typeorm/entities/Establishment";
import IEstablishmentRepository from "@modules/establishment/repositories/IEstablishmentRepository";

@injectable()
class ListEstablishmentUseCase {
  constructor(
    @inject("EstablishmentRepository")
    private establishmentRepository: IEstablishmentRepository
  ) {}

  public async execute(): Promise<Establishment[]> {
    const establishments = await this.establishmentRepository.findAll();

    return establishments;
  }
}

export default ListEstablishmentUseCase;
