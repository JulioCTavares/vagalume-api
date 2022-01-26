import { Request, Response } from "express";
import { container } from "tsyringe";

import DeleteManagerUseCase from "./DeleteManagerUseCase";

class DeleteManagerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const managerId = req.params.id;

    const deleteManager = container.resolve(DeleteManagerUseCase);

    await deleteManager.execute({ managerId });

    return res.status(204).send();
  }
}

export default DeleteManagerController;
