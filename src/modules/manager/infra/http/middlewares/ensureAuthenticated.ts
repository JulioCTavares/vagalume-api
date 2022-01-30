import authConfig from "@config/auth";
import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";
import ErrorsApp from "@shared/errors/ErrorsApp";
import ManagerRepository from "@modules/manager/infra/typeorm/repositories/ManagerRepository";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new ErrorsApp("missing JWT token", 401);
  }

  const [, token] = authHeader.split(" ");

  let manager_id;

  try {
    const { sub } = verify(token, authConfig.jwt.secret) as ITokenPayload;
    manager_id = sub;
  } catch (error) {
    throw new ErrorsApp("JWT token not valid", 401);
  }

  const managerRepository = new ManagerRepository();
  const manager = await managerRepository.findById(manager_id);

  if (!manager) {
    throw new ErrorsApp("Manager not found", 404);
  }

  req.manager = {
    id: manager_id,
  };

  return next();
}
