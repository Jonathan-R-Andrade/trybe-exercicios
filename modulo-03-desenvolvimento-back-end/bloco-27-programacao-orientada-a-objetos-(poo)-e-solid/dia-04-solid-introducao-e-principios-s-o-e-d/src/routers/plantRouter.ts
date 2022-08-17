import { Request, Response, Router } from 'express';

const plantRouter = Router();

plantRouter.get('/', (_req: Request, res: Response) => {
  res.status(200).send({ message: 'OK' });
});

export default plantRouter;
