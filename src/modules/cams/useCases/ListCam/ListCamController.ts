import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import ListCamUseCase from "./ListCamUseCase";

class ListCamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCams = container.resolve(ListCamUseCase);

    const cams = await listCams.execute();

    return res.json({ success: true, cams: classToClass(cams) });
  }
}

export default ListCamController;
