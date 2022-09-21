import 'express-async-errors';
import dotenv from 'dotenv';
import express from 'express';
import handleErrors from './middlewares/handleErrors';
import usersRouter from './routers/usersRouter';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.use(handleErrors);

export default app;
