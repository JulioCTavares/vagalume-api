import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import ShowEstablishmentUseCase from "./ShowEsblishmentUseCase";

class ShowEstablishmentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const establishmentId = req.params.id;

    const showEstablishment = container.resolve(ShowEstablishmentUseCase);

    const establishment = await showEstablishment.execute({ establishmentId });

    return res.json({
      success: true,
      establishment: classToClass(establishment),
    });
  }
}

export default ShowEstablishmentController;
