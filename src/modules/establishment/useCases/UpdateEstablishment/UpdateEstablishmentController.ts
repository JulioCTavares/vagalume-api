import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";

import UpdateEstablishmentUseCase from "./UpdateEstablishmentUseCase";

class UpdateEstablishmentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const establishmentId = req.params.id;

    const { name, address, category } = req.body;

    const updateEstablishment = container.resolve(UpdateEstablishmentUseCase);

    const establishment = await updateEstablishment.execute({
      establishmentId,
      name,
      address,
      category,
    });

    return res.json({
      success: true,
      establishment: classToClass(establishment),
    });
  }
}

export default UpdateEstablishmentController;
