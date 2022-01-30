import AuthenticateController from "@modules/manager/useCases/Authenticate/AuthenticateController";
import { Router } from "express";

const sessionRouter = Router();

const authenticateController = new AuthenticateController();

sessionRouter.post("/", authenticateController.handle);

export default sessionRouter;
