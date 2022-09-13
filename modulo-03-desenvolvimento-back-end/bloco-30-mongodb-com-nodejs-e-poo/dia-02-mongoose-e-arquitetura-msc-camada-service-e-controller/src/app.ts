import express from 'express';
import errorHandler from './middlewares/error';
import 'express-async-errors';
import frameRouter from './routes/frame';

const app = express();
app.use(express.json());
app.use(frameRouter);
app.use(errorHandler);

export default app;
