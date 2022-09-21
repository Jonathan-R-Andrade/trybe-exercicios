import IVehicle from './IVehicle';

export default interface IAirVehicle extends IVehicle {
  start(): void;
  stop(): void;
  fly(): void;
}
