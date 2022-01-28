import ICreateCamDTO from "@modules/cams/dtos/ICreateCamDTO";
import Cam from "../entities/Cam";
import ICamRepository from "@modules/cams/repositories/ICamRepository";
import { getRepository, Repository } from "typeorm";

class CamRepository implements ICamRepository {
  private camRepository: Repository<Cam>;

  constructor() {
    this.camRepository = getRepository(Cam);
  }

  public async create(data: ICreateCamDTO): Promise<Cam> {
    const cam = this.camRepository.create(data);

    await this.camRepository.save(cam);

    return cam;
  }

  public async findAll(): Promise<Cam[]> {
    const cams = await this.camRepository.find();

    return cams;
  }

  public async findById(id: string): Promise<Cam | undefined> {
    const cam = await this.camRepository.findOne(id);

    return cam;
  }

  public save(cam: Cam): Promise<Cam> {
    return this.camRepository.save(cam);
  }

  public async delete(cam: Cam): Promise<void> {
    await this.camRepository.remove(cam);
  }
}

export default CamRepository;
