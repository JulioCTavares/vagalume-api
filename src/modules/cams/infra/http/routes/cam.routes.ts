import { Router } from "express";

import CreateCamController from "@modules/cams/useCases/CreateCam/CreateCamController";
import ListCamController from "@modules/cams/useCases/ListCam/ListCamController";
import ShowCamController from "@modules/cams/useCases/ShowCam/ShowCamController";
import UpdateCamController from "@modules/cams/useCases/UpdateCam/UpdateCamController";
import DeleteCamController from "@modules/cams/useCases/DeleteCam/DeleteCamController";
import ensureAuthenticated from "@modules/manager/infra/http/middlewares/ensureAuthenticated";

const camRouter = Router();

const createCamController = new CreateCamController();
const listCamController = new ListCamController();
const showCamController = new ShowCamController();
const updateCamController = new UpdateCamController();
const deleteCamController = new DeleteCamController();

camRouter.use(ensureAuthenticated);
camRouter.post("/", createCamController.handle);
camRouter.get("/", listCamController.handle);
camRouter.get("/:id", showCamController.handle);
camRouter.put("/:id", updateCamController.handle);
camRouter.delete("/:id", deleteCamController.handle);

export default camRouter;
