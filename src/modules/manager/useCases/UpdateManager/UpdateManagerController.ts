import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";

import UpdateManagerUseCase from "./UpdateManagerUseCase";

class UpdateManagerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const managerId = req.params.id;

    const { name, cpf, email, password } = req.body;

    const updateManager = container.resolve(UpdateManagerUseCase);

    const manager = await updateManager.execute({
      managerId,
      name,
      cpf,
      email,
      password,
    });

    return res.json({ success: true, manager: classToClass(manager) });
  }
}

export default UpdateManagerController;
