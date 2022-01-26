import IManagerRepository from "@modules/manager/repositories/IManagerRepository";
import ManagerRepository from "@modules/manager/infra/typeorm/repositories/ManagerRepository";

import { container } from "tsyringe";

container.registerSingleton<IManagerRepository>(
  "ManagerRepository",
  ManagerRepository
);
