import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import CreateManagerUseCase from "./CreateManagerUseCase";

class CreateManagerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, cpf, email, password } = req.body;

    const createManagerUseCase = container.resolve(CreateManagerUseCase);

    const manager = await createManagerUseCase.execute({
      name,
      cpf,
      email,
      password,
    });

    return res
      .status(201)
      .json({ success: true, manager: classToClass(manager) });
  }
}

export default CreateManagerController;
