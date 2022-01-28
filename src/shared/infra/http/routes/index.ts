import { Router } from "express";
import managerRouter from "@modules/manager/infra/http/routes/manager.routes";
import establishmentRouter from "@modules/establishment/infra/http/routes/establishment.routes";
import camRouter from "@modules/cams/infra/http/routes/cam.routes";

const routes = Router();

routes.use("/managers", managerRouter);
routes.use("/establishments", establishmentRouter);
routes.use("/cams", camRouter);

export default routes;
