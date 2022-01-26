import { classToClass } from "class-transformer";
import { container } from "tsyringe";
import { Request, Response } from "express";

import ShowManagerUseCase from "./ShowManagerUseCase";

class ShowManagerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const managerId = req.params.id;

    const showManager = container.resolve(ShowManagerUseCase);

    const manager = await showManager.execute({ managerId });

    return res.json({ success: true, manager: classToClass(manager) });
  }
}

export default ShowManagerController;
