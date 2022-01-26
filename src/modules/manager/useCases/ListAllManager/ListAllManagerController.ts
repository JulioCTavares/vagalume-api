import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import ListAllManagerUseCases from "./ListAllManagerUseCases";

class ListAllManagerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listAllManager = container.resolve(ListAllManagerUseCases);

    const managers = await listAllManager.execute();

    return res.json({ success: true, managers: classToClass(managers) });
  }
}

export default ListAllManagerController;
