import { isCelebrateError } from "celebrate";
import { Request, Response, NextFunction } from "express";

import ErrorsApp from "./ErrorsApp";
import { errorsMessageCelebrate } from "./errorsMessageCelebrate";

const errorHandling = async (
  err: Error | any,
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response> => {
  if (err instanceof ErrorsApp) {
    return response
      .status(err.statusCode)
      .json({ success: false, message: err.message });
  }

  if (isCelebrateError(err)) {
    return response.status(400).json(errorsMessageCelebrate(err));
  }

  return response.status(500).json({
    success: false,
    message: "Erro interno no servidor.",
  });
};

export default errorHandling;
