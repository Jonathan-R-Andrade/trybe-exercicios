import 'express-async-errors';
import dotenv from 'dotenv';
import express from 'express';
import handleErrors from './middlewares/handleErrors';
import postsRouter from './routers/postsRouter';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/posts', postsRouter);

app.use(handleErrors);

export default app;
