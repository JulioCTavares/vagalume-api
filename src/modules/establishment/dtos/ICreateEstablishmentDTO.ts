import { Categories } from "../infra/typeorm/entities/Establishment";

export default interface ICreateEstablishmentDTO {
  name: string;
  address: string;
  category: Categories;
}
