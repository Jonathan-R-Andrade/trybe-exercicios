import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

function handleErrors(err: Error, _req: Request, res: Response, next: NextFunction): void {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: 'Internal Server Error.',
  });

  next(err);
}

export default handleErrors;
