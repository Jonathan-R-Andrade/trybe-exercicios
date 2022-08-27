import { Options, Sequelize } from 'sequelize';
import options from './config/config';

const env = process.env.NODE_ENV || 'development';
const config = (options as Record<string, Options>)[env];

const sequelize: Sequelize = new Sequelize(
  config.database as string,
  config.username as string,
  config.password,
  config,
);

export default sequelize;
