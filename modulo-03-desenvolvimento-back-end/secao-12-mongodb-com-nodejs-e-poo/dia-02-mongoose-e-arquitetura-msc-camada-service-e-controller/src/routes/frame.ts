import { Router } from 'express';
import FrameController from '../controllers/Frame';
import FrameModel from '../models/Frame';
import FrameService from '../services/Frame';

const route = Router();

const frame = new FrameModel();
const frameService = new FrameService(frame);
const frameController = new FrameController(frameService);

route.post('/', (req, res) => frameController.create(req, res));
route.get('/', (req, res) => frameController.readAll(req, res));
route.get('/:id', (req, res) => frameController.readOne(req, res));
route.delete('/:id', (req, res) => frameController.delete(req, res));

export default route;
