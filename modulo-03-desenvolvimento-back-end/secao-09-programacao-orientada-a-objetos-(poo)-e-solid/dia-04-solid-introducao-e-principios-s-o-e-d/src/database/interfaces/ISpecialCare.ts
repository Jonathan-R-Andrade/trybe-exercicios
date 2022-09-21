interface ISpecialCare {
  waterFrequency: number,
}

export interface ISpecialCareCreationAttributes {
  plantId: string,
  waterFrequency: number,
}

export interface ISpecialCareAttributes extends ISpecialCareCreationAttributes, ISpecialCare {
  id: number,
}

export default ISpecialCare;
