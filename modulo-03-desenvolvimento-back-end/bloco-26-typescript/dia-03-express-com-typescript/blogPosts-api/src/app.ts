import dotenv from 'dotenv';
import express from 'express';
import postsRouter from './routers/postsRouter';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/posts', postsRouter);

export default app;
