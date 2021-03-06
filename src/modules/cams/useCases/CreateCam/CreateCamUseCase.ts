import ICreateCamDTO from "@modules/cams/dtos/ICreateCamDTO";
import Cam from "@modules/cams/infra/typeorm/entities/Cam";
import ICamRepository from "@modules/cams/repositories/ICamRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class CreateCamUseCase {
  constructor(
    @inject("CamRepository")
    private camRepository: ICamRepository
  ) {}

  public async execute({ip, user, model ,countdown}: ICreateCamDTO): Promise<Cam> {
    const cam = await this.camRepository.create({ip, user, model ,installation: new Date() ,countdown});

    

    return cam;
  }
}

export default CreateCamUseCase;
