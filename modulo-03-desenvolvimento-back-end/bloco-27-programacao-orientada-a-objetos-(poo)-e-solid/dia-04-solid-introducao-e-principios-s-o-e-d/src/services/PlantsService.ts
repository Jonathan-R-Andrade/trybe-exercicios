import IPlant from '../database/interfaces/IPlant';
import PlantsModel from '../database/models/PlantsModel';
import SpecialCareModel from '../database/models/SpecialCareModel';
import sequelize from '../database/sequelize';

class PlantsService {
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

  private static specialCare = {
    model: SpecialCareModel,
    as: 'specialCare',
    attributes: { exclude: ['id', 'plantId'] },
  };

  public static async getPlants(): Promise<IPlant[]> {
    return PlantsModel.findAll({
      include: this.specialCare,
    });
  }

  public static async getPlantById(id: string): Promise<IPlant | null> {
    return PlantsModel.findByPk(id, {
      include: this.specialCare,
    });
  }

  public static async removePlantById(id: string): Promise<boolean> {
    const removed = await PlantsModel.destroy({ where: { id } });
    return !!removed;
  }

  public static async getPlantsThatNeedsSunWithId(id: string): Promise<IPlant | null> {
    return PlantsModel.findOne({
      where: { id, needsSun: true },
      include: this.specialCare,
    });
  }

  public static async editPlant(id: string, newPlant: IPlant): Promise<IPlant | null> {
    const plant = await PlantsModel.findByPk(id);
    if (!plant) return null;
    const initializedPlant = this.initPlant(newPlant);

    return sequelize.transaction(async (transaction) => {
      const updatedPlant = await plant.update(initializedPlant, { transaction });

      await SpecialCareModel
        .update(initializedPlant.specialCare, { where: { plantId: id }, transaction });

      return this.initPlant({
        ...updatedPlant.toJSON(), specialCare: initializedPlant.specialCare,
      });
    });
  }

  public static async savePlant(plant: IPlant): Promise<IPlant> {
    const newPlant = this.initPlant(plant);

    return sequelize.transaction(async (transaction) => {
      const createdPlant = await PlantsModel.create(newPlant, { transaction });

      await createdPlant
        .createSpecialCare({ ...newPlant.specialCare }, { transaction });

      return { ...newPlant, id: createdPlant.id };
    });
  }
}

export default PlantsService;
