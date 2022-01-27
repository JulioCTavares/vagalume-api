import { inject, injectable } from "tsyringe";

import IEstablishmentRepository from "@modules/establishment/repositories/IEstablishmentRepository";
import ErrorsApp from "@shared/errors/ErrorsApp";

interface IRequest {
  establishmentId: string;
}

@injectable()
class DeleteEstablishmentUseCase {
  constructor(
    @inject("EstablishmentRepository")
    private establishmentRepository: IEstablishmentRepository
  ) {}

  public async execute({ establishmentId }: IRequest): Promise<void> {
    const establishment = await this.establishmentRepository.findById(
      establishmentId
    );

    if (!establishment) {
      throw new ErrorsApp("Esblishment not found", 404);
    }

    await this.establishmentRepository.delete(establishment);
  }
}

export default DeleteEstablishmentUseCase;
