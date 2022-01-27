import { Router } from "express";

import CreateEstablishmentController from "@modules/establishment/useCases/CreateEstablishment/CreateEstablishmentController";
import ListEstablishmentController from "@modules/establishment/useCases/ListEstablishment/ListEsblishmentController";
import ShowEstablishmentController from "@modules/establishment/useCases/ShowEsblishment/ShowEsblishmentController";
import UpdateEstablishmentController from "@modules/establishment/useCases/UpdateEstablishment/UpdateEstablishmentController";
import DeleteEstablishmentController from "@modules/establishment/useCases/DeleteEstablishment/DeleteEstablishmentController";

const createEstablishmentController = new CreateEstablishmentController();
const listEstablishmentController = new ListEstablishmentController();
const showEstablishmentController = new ShowEstablishmentController();
const updateEstablishmentController = new UpdateEstablishmentController();
const deleteEstablishmentController = new DeleteEstablishmentController();

const establishmentRouter = Router();

establishmentRouter.post("/", createEstablishmentController.handle);
establishmentRouter.get("/", listEstablishmentController.handle);
establishmentRouter.get(":/id", showEstablishmentController.handle);
establishmentRouter.put("/:id", updateEstablishmentController.handle);
establishmentRouter.delete("/:id", deleteEstablishmentController.handle);

export default establishmentRouter;
