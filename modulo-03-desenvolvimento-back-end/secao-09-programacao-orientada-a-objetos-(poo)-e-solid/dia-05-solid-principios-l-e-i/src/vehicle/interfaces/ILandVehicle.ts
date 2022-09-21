import IVehicle from './IVehicle';

export default interface ILandVehicle extends IVehicle {
  start(): void;
  stop(): void;
  drive(): void;
}
