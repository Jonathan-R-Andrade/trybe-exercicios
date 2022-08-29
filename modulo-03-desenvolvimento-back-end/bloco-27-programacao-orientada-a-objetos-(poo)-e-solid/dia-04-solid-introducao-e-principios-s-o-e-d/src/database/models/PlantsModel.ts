import {
  Model, DataTypes, HasManyCreateAssociationMixin,
} from 'sequelize';
import IPlant, {
  IPlantAttributes, IPlantCreationAttributes,
} from '../interfaces/IPlant';
import sequelize from '../sequelize';
import SpecialCareModel from './SpecialCareModel';

class PlantsModel extends Model<
  IPlantAttributes,
  IPlantCreationAttributes
> implements IPlant {
  id!: string;
  breed!: string;
  size!: number;
  needsSun!: boolean;
  origin!: string;
  specialCare!: SpecialCareModel;

  createSpecialCare!: HasManyCreateAssociationMixin<SpecialCareModel, 'plantId'>;
}

PlantsModel.init({
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  needsSun: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  tableName: 'plants',
  underscored: true,
});

PlantsModel.hasOne(SpecialCareModel, {
  sourceKey: 'id',
  foreignKey: 'plantId',
  as: 'specialCare',
});

export default PlantsModel;
