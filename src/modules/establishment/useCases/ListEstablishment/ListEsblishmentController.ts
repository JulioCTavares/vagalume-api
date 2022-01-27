import { Request, Response } from "express";
import { classToClass } from "class-transformer";
import { container } from "tsyringe";

import ListEstablishmentUseCase from "./ListEstablishmentUseCase";

class ListEsblishmentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listEstablishments = container.resolve(ListEstablishmentUseCase);

    const establishments = await listEstablishments.execute();

    return res.json({
      success: true,
      establishments: classToClass(establishments),
    });
  }
}

export default ListEsblishmentController;
