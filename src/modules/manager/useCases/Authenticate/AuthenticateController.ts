import { Response, Request } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import AuthenticateUseCase from "./AuthenticateUseCase";

class AuthenticateController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticate = container.resolve(AuthenticateUseCase);

    const { manager, token } = await authenticate.execute({ email, password });

    return res.json({ success: true, manager: classToClass(manager), token });
  }
}

export default AuthenticateController;
