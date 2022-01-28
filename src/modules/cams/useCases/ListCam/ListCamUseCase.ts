import Cam from "@modules/cams/infra/typeorm/entities/Cam";
import ICamRepository from "@modules/cams/repositories/ICamRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class ListCamUseCase {
  constructor(
    @inject("CamRepository")
    private camRepository: ICamRepository
  ) {}

  public async execute(): Promise<Cam[]> {
    const cams = await this.camRepository.findAll();

    return cams;
  }
}

export default ListCamUseCase;
