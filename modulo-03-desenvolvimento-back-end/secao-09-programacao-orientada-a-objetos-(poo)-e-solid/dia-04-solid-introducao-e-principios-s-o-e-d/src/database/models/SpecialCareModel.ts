import { Model, DataTypes } from 'sequelize';
import ISpecialCare, {
  ISpecialCareAttributes, ISpecialCareCreationAttributes,
} from '../interfaces/ISpecialCare';
import sequelize from '../sequelize';

class SpecialCareModel extends Model<
  ISpecialCareAttributes,
  ISpecialCareCreationAttributes
> implements ISpecialCare {
  id!: number;
  waterFrequency!: number;
  plantId!: string;
}

SpecialCareModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  waterFrequency: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  plantId: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    references: {
      model: 'plants',
      key: 'id',
    },
  },
}, {
  sequelize,
  timestamps: false,
  tableName: 'special_cares',
  underscored: true,
});

export default SpecialCareModel;
