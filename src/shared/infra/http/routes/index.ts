import { Router } from "express";
import managerRouter from "@modules/manager/infra/http/routes/manager.routes";
import establishmentRouter from "@modules/establishment/infra/http/routes/establishment.routes";

const routes = Router();

routes.use("/manager", managerRouter);
routes.use("/establishment", establishmentRouter);

export default routes;
