import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import PlantsService from '../services/PlantsService';

class PlantsController {
  private plantsService;

  constructor(plantsService: PlantsService = new PlantsService()) {
    this.plantsService = plantsService;
  }

  public getPlants = async (_req: Request, res: Response): Promise<void> => {
    const plants = await this.plantsService.getPlants();
    res.status(StatusCodes.OK).json(plants);
  }

  public getPlantById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const plant = await this.plantsService.getPlantById(id);
    res.status(StatusCodes.OK).json(plant);
  }

  public removePlantById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await this.plantsService.removePlantById(id);
    res.status(StatusCodes.NO_CONTENT).end();
  }

  public getPlantsThatNeedsSunWithId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const plants = await this.plantsService.getPlantsThatNeedsSunWithId(id);
    res.status(StatusCodes.OK).json(plants);
  }

  public editPlant = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const plant = await this.plantsService.editPlant(id, req.body);
    res.status(StatusCodes.OK).json(plant);
  }

  public savePlant = async (req: Request, res: Response): Promise<void> => {
    const plant = await this.plantsService.savePlant(req.body);
    res.status(StatusCodes.CREATED).json(plant);
  }
}

export default PlantsController;
