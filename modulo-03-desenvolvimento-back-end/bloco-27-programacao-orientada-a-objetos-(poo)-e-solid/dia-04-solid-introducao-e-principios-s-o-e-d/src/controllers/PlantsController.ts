import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import PlantsService from '../services/PlantsService';

class PlantsController {
  public getPlants = async (_req: Request, res: Response): Promise<void> => {
    const plants = await PlantsService.getPlants();
    res.status(StatusCodes.OK).json(plants);
  }

  public getPlantById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const plant = await PlantsService.getPlantById(id);
    const status = plant ? StatusCodes.OK : StatusCodes.NOT_FOUND;
    res.status(status).json(plant);
  }

  public removePlantById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const removed = await PlantsService.removePlantById(id);
    const status = removed ? StatusCodes.NO_CONTENT : StatusCodes.NOT_FOUND;
    res.status(status).end();
  }

  public getPlantsThatNeedsSunWithId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const plant = await PlantsService.getPlantsThatNeedsSunWithId(id);
    const status = plant ? StatusCodes.OK : StatusCodes.NOT_FOUND;
    res.status(status).json(plant);
  }

  public editPlant = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const plant = await PlantsService.editPlant(id, req.body);
    const status = plant ? StatusCodes.OK : StatusCodes.NOT_FOUND;
    res.status(status).json(plant);
  }

  public savePlant = async (req: Request, res: Response): Promise<void> => {
    const plant = await PlantsService.savePlant(req.body);
    res.status(StatusCodes.CREATED).json(plant);
  }
}

export default PlantsController;
