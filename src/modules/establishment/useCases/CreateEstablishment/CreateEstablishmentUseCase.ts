import ICreateEstablishmentDTO from "@modules/establishment/dtos/ICreateEstablishmentDTO";
import Establishment from "@modules/establishment/infra/typeorm/entities/Establishment";
import IEstablishmentRepository from "@modules/establishment/repositories/IEstablishmentRepository";
import { injectable, inject } from "tsyringe";
import ErrorsApp from "@shared/errors/ErrorsApp";

@injectable()
class CreateEstablishmentUseCase {
  constructor(
    @inject("EstablishmentRepository")
    private establishmentRepository: IEstablishmentRepository
  ) {}

  public async execute({
    name,
    address,
    category,
  }: ICreateEstablishmentDTO): Promise<Establishment> {
    const establishmentExists =
      await this.establishmentRepository.findByAddress(address);

    if (establishmentExists) {
      throw new ErrorsApp("Address already registered");
    }

    const establishment = await this.establishmentRepository.create({
      name,
      address,
      category,
    });

    return establishment;
  }
}

export default CreateEstablishmentUseCase;
