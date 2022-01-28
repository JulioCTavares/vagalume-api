import { Request, Response } from "express";
import { container } from "tsyringe";

import DeleteCamUseCase from "./DeleteCamUseCase";

class DeleteCamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const camId = req.params.id;

    const deleteCam = container.resolve(DeleteCamUseCase);

    await deleteCam.execute({ camId });

    return res.status(204).send();
  }
}

export default DeleteCamController;
