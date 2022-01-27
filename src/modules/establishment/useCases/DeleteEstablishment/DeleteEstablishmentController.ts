import { Request, Response } from "express";
import { container } from "tsyringe";

import DeleteEstablishmentUseCase from "./DeleteEstablishmentUseCase";

class DeleteEstablishmentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const establishmentId = req.params.id;

    const deleteEstablishment = container.resolve(DeleteEstablishmentUseCase);

    await deleteEstablishment.execute({ establishmentId });

    return res.status(204).send();
  }
}

export default DeleteEstablishmentController;
