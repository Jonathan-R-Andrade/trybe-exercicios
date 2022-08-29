import { Router } from 'express';
import PlantsController from '../controllers/PlantsController';

const plantsController = new PlantsController();

const plantRouter = Router();

plantRouter.get('/', plantsController.getPlants);
plantRouter.get('/sunny/:id', plantsController.getPlantsThatNeedsSunWithId);
plantRouter.get('/:id', plantsController.getPlantById);
plantRouter.post('/', plantsController.savePlant);
plantRouter.put('/:id', plantsController.editPlant);
plantRouter.delete('/:id', plantsController.removePlantById);

export default plantRouter;
