import { Router } from "express";
import managerRouter from "@modules/manager/infra/http/routes/manager.routes";
import establishmentRouter from "@modules/establishment/infra/http/routes/establishment.routes";
import camRouter from "@modules/cams/infra/http/routes/cam.routes";
import sessionRouter from "@modules/manager/infra/http/routes/session.routes";
import readRouter from "@shared/util/readFiles";

const routes = Router();

routes.use("/managers", managerRouter);
routes.use("/session", sessionRouter);
routes.use("/establishments", establishmentRouter);
routes.use("/cams", camRouter);
routes.use("/file", readRouter);

export default routes;
