import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import CreateCamUseCase from "./CreateCamUseCase";

class CreateCamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { ip, user, model, installation, countdown } = req.body;

    const createCam = container.resolve(CreateCamUseCase);

    const cam = await createCam.execute({
      ip,
      user,
      model,
      installation,
      countdown,
    });

    return res.status(201).json({ success: true, cam: classToClass(cam) });
  }
}

export default CreateCamController;
