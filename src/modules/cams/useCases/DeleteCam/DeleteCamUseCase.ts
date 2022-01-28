import ErrorsApp from "@shared/errors/ErrorsApp";
import ICamRepository from "@modules/cams/repositories/ICamRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  camId: string;
}

@injectable()
class DeleteCamUseCase {
  constructor(
    @inject("CamRepository")
    private camRepository: ICamRepository
  ) {}

  public async execute({ camId }: IRequest): Promise<void> {
    const cam = await this.camRepository.findById(camId);

    if (!cam) {
      throw new ErrorsApp("Cam not found", 404);
    }

    await this.camRepository.delete(cam);
  }
}

export default DeleteCamUseCase;
