import { Router } from "express";

import CreateManagerController from "@modules/manager/useCases/CreateManager/CreateManagerController";
import ListAllManagerController from "@modules/manager/useCases/ListAllManager/ListAllManagerController";
import DeleteManagerController from "@modules/manager/useCases/DeleteManager/DeleteManagerController";
import ShowManagerController from "@modules/manager/useCases/ShowManager/ShowManagerController";
import UpdateManagerController from "@modules/manager/useCases/UpdateManager/UpdateManagerController";

const createManagerController = new CreateManagerController();
const listAllManagerController = new ListAllManagerController();
const showAllManagerController = new ShowManagerController();
const updateManagerController = new UpdateManagerController();
const deleteManagerController = new DeleteManagerController();

const managerRouter = Router();

managerRouter.post("/", createManagerController.handle);
managerRouter.get("/", listAllManagerController.handle);
managerRouter.get("/:id", showAllManagerController.handle);
managerRouter.put("/:id", updateManagerController.handle);
managerRouter.delete("/:id", deleteManagerController.handle);

export default managerRouter;
