import ISpecialCare from './ISpecialCare';

interface IPlant {
  id?: string,
  breed: string,
  size: number,
  needsSun: boolean,
  origin: string,
  specialCare: ISpecialCare;
}

export interface IPlantCreationAttributes {
  breed: string,
  size: number,
  needsSun: boolean,
  origin: string,
}

export interface IPlantAttributes extends IPlantCreationAttributes {
  id: string,
}

export default IPlant;
