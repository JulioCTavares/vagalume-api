import Cam from "../infra/typeorm/entities/Cam";
import ICreateCamDTO from "@modules/cams/dtos/ICreateCamDTO";

export default interface ICamRepository {
  create(data: ICreateCamDTO): Promise<Cam>;
  findAll(): Promise<Cam[]>;
  findById(id: string): Promise<Cam | undefined>;
  save(cam: Cam): Promise<Cam>;
  delete(cam: Cam): Promise<void>;
}
