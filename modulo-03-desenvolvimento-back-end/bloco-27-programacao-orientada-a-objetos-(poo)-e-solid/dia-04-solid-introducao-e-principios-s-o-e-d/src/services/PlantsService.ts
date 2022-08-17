import IPlant from '../database/interfaces/IPlant';
import PlantsModel from '../database/models/PlantsModel';

class PlantsService {
  private plantsModel;

  constructor(plantsModel: PlantsModel = new PlantsModel()) {
    this.plantsModel = plantsModel;
  }

  private static initPlant(plant: IPlant): IPlant {
    const { id, breed, needsSun, origin, specialCare, size } = plant;
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };

    return newPlant;
  }

  public async getPlants(): Promise<IPlant[]> {
    return this.plantsModel.getPlants();
  }

  public async getPlantById(id: string): Promise<IPlant | null> {
    return this.plantsModel.getPlantById(id);
  }

  public async removePlantById(id: string): Promise<IPlant | null> {
    return this.plantsModel.removePlantById(id);
  }

  public async getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]> {
    return this.plantsModel.getPlantsThatNeedsSunWithId(id);
  }

  public async editPlant(id: string, newPlant: IPlant): Promise<IPlant> {
    return this.plantsModel.editPlant(id, newPlant);
  }

  public async savePlant(plant: IPlant): Promise<IPlant> {
    const newPlant = PlantsService.initPlant(plant);
    return this.plantsModel.savePlant(newPlant);
  }
}

export default PlantsService;
