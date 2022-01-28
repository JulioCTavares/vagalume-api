import ICamRepository from "@modules/cams/repositories/ICamRepository";
import Cam from "@modules/cams/infra/typeorm/entities/Cam";
import { injectable, inject } from "tsyringe";

import ErrorsApp from "@shared/errors/ErrorsApp";

interface IRequest {
  camId: string;
}

@injectable()
class ShowCamUseCase {
  constructor(
    @inject("CamRepository")
    private camRepository: ICamRepository
  ) {}

  public async execute({ camId }: IRequest): Promise<Cam> {
    const cam = await this.camRepository.findById(camId);

    if (!cam) {
      throw new ErrorsApp("Cam not found", 404);
    }

    return cam;
  }
}

export default ShowCamUseCase;
