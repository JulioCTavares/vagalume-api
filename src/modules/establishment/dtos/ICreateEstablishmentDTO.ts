import { Categories } from "../infra/typeorm/entities/Establishment";

export default interface ICreateEstablishmentDTO {
  manager_id: string;
  name: string;
  address: string;
  category: Categories;
}
