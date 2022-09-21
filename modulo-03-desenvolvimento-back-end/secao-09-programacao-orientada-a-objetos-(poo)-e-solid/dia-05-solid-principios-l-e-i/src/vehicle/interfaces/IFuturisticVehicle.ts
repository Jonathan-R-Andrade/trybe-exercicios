import ILandVehicle from './ILandVehicle';
import IAirVehicle from './IAirVehicle';

export default interface IFuturisticVehicle extends ILandVehicle, IAirVehicle {
  start(): void;
  stop(): void;
  drive(): void;
  fly(): void;
}
