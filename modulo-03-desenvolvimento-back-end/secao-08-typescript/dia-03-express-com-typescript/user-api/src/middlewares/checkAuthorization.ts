import { NextFunction, Request, Response } from "express";
import { unauthorized } from "../errors/httpErrors";

function checkAuthorization(req: Request, _res: Response, next: NextFunction) {
  const { id } = req.params;
  const { jwtPayload: { userId } } = req as any;
  if (Number(id) !== userId) throw unauthorized('Access denied');
  next();
};

export default checkAuthorization;
