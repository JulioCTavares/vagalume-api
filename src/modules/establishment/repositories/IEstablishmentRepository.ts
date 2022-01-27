import Establishment from "../infra/typeorm/entities/Establishment";
import ICreateEstablishmentDTO from "@modules/establishment/dtos/ICreateEstablishmentDTO";

export default interface IEstablishmentRepository {
  create(data: ICreateEstablishmentDTO): Promise<Establishment>;
  findAll(): Promise<Establishment[]>;
  findById(id: string): Promise<Establishment | undefined>;
  findByAddress(address: string): Promise<Establishment | undefined>;
  save(establishment: Establishment): Promise<Establishment>;
  delete(establishment: Establishment): Promise<void>;
}
