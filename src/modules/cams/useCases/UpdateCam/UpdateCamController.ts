import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import UpdateCamUseCases from "./UpdateCamUseCase";

class UpdateCamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const camId = req.params.id;

    const { ip, user, model } = req.body;

    const updateCam = container.resolve(UpdateCamUseCases);

    const cam = await updateCam.execute({
      camId,
      ip,
      model,
      user,
    });

    return res.json({ success: true, cam: classToClass(cam) });
  }
}

export default UpdateCamController;
