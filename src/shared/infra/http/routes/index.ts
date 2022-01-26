import { Router } from "express";
import managerRouter from "@modules/manager/infra/http/routes/manager.routes";

const routes = Router();

routes.use("/manager", managerRouter);

export default routes;
