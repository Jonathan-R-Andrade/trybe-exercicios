import { Request, Response, NextFunction } from 'express';
import jwt from '../utils/jwt';

export default function verifyToken(req: Request, _res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;
  const jwtPayload: any = jwt.verifyToken(token as string);
  (req as any).jwtPayload = jwtPayload.data;
  next();
}
