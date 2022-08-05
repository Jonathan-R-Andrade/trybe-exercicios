import dotenv from 'dotenv';
import express from 'express';
import usersRouter from './routers/usersRouter';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/users', usersRouter);

export default app;
