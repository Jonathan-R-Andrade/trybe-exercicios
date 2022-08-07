import { NextFunction, Request, Response } from "express";
import HttpStatus from "../enums/httpStatus";
import HttpError from "../errors/httpError";

function handleErrors(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({ error: { message: err.message } });
  }
  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    error: {
      message: 'Internal Server Error',
    },
  });
}

export default handleErrors;
