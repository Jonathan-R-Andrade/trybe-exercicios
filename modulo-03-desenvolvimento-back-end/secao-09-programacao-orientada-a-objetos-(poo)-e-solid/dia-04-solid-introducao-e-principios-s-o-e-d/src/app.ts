import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import plantRouter from './routers/plantRouter';
import handleErrors from './middlewares/handleErrors';

const app = express();

app.use(express.json());

app.use('/plant', plantRouter);

app.use(handleErrors);

export default app;
