import 'dotenv/config';
import express from 'express';
import plantRouter from './routers/plantRouter';

const app = express();

app.use(express.json());

app.use('/plant', plantRouter);

export default app;
