import ILandVehicle from './interfaces/ILandVehicle';

export default class Car implements ILandVehicle {
  start(): void { console.log('Starting a car'); }

  stop(): void { console.log('Stopping a car'); }

  drive(): void { console.log('Drive a car'); }
}
