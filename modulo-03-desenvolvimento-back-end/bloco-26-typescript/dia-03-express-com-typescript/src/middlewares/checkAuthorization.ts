import { NextFunction, Request, Response } from "express";
import HttpStatus from "../enums/httpStatus";
import HttpError from "../errors/httpError";

function checkAuthorization(req: Request, _res: Response, next: NextFunction) {
  const { id } = req.params;
  const { jwtPayload: { userId } } = req as any;
  if (Number(id) !== userId) {
    throw new HttpError(HttpStatus.UNAUTHORIZED, 'Access denied');
  }
  next();
};

export default checkAuthorization;
