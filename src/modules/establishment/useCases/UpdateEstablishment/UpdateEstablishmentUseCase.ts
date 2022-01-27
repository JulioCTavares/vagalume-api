import Establishment from "@modules/establishment/infra/typeorm/entities/Establishment";
import IEstablishmentRepository from "@modules/establishment/repositories/IEstablishmentRepository";
import { injectable, inject } from "tsyringe";
import ErrorsApp from "@shared/errors/ErrorsApp";
import { Categories } from "@modules/establishment/infra/typeorm/entities/Establishment";

interface IRequest {
  establishmentId: string;
  name: string;
  address: string;
  category: Categories;
}

@injectable()
class UpdateEstablishmentUseCase {
  constructor(
    @inject("EstablishmentRepository")
    private establishmentRepository: IEstablishmentRepository
  ) {}

  public async execute({
    establishmentId,
    name,
    address,
    category,
  }: IRequest): Promise<Establishment> {
    const establishment = await this.establishmentRepository.findById(
      establishmentId
    );

    if (!establishment) {
      throw new ErrorsApp("Could not find establishment", 404);
    }

    Object.assign(establishment, {
      name,
      address,
      category,
    });

    return this.establishmentRepository.save(establishment);
  }
}

export default UpdateEstablishmentUseCase;
