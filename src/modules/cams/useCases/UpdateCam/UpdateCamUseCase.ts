import Cam from "@modules/cams/infra/typeorm/entities/Cam";
import ICamRepository from "@modules/cams/repositories/ICamRepository";
import { injectable, inject } from "tsyringe";
import ErrorsApp from "@shared/errors/ErrorsApp";

interface IRequest {
  camId: string;
  ip: string;
  user: string;
  model: string;
}

@injectable()
class UpdateCamUseCases {
  constructor(
    @inject("CamRepository")
    private camRepository: ICamRepository
  ) {}

  public async execute({ camId, ip, user, model }: IRequest): Promise<Cam> {
    const cam = await this.camRepository.findById(camId);

    if (!cam) {
      throw new ErrorsApp("Could not find cam", 404);
    }

    Object.assign(cam, {
      ip,
      user,
      model,
    });

    return cam;
  }
}

export default UpdateCamUseCases;
