import Manager from "../infra/typeorm/entities/Manager";
import ICreateManagerDTO from "@modules/manager/dtos/ICreateManagerDTO";

export default interface IManagerRepository {
  create(data: ICreateManagerDTO): Promise<Manager>;
  findAll(): Promise<Manager[]>;
  findById(id: string): Promise<Manager | undefined>;
  findByEmail(email: string): Promise<Manager | undefined>;
  save(manager: Manager): Promise<Manager>;
  delete(manager: Manager): Promise<void>;
}
