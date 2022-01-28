import IManagerRepository from "@modules/manager/repositories/IManagerRepository";
import ManagerRepository from "@modules/manager/infra/typeorm/repositories/ManagerRepository";
import IEstablishmentRepository from "@modules/establishment/repositories/IEstablishmentRepository";
import EstablishmentRepository from "@modules/establishment/infra/typeorm/repositories/EstablishmentRepository";
import ICamRepository from "@modules/cams/repositories/ICamRepository";
import CamRepository from "@modules/cams/infra/typeorm/repositories/CamRepository";
import { container } from "tsyringe";

container.registerSingleton<IManagerRepository>(
  "ManagerRepository",
  ManagerRepository
);

container.registerSingleton<IEstablishmentRepository>(
  "EstablishmentRepository",
  EstablishmentRepository
);

container.registerSingleton<ICamRepository>("CamRepository", CamRepository);
