import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import CreateEstablishmentUseCase from "./CreateEstablishmentUseCase";

class CreateEstablishmentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, address, category } = req.body;

    const createEstablishment = container.resolve(CreateEstablishmentUseCase);

    const establishment = createEstablishment.execute({
      name,
      address,
      category,
    });

    return res
      .status(204)
      .json({ success: true, establishment: classToClass(establishment) });
  }
}

export default CreateEstablishmentController;
