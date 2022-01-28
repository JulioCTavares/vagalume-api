import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import ShowCamUseCase from "./ShowCamUseCase";

class ShowCamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const camId = req.params.id;

    const showCam = container.resolve(ShowCamUseCase);

    const cam = await showCam.execute({ camId });

    return res.json({ success: true, cam: classToClass(cam) });
  }
}

export default ShowCamController;
