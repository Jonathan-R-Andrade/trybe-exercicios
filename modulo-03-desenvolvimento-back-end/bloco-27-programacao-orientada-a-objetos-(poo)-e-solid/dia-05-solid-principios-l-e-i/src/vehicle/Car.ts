import IVehicle from './interfaces/IVehicle';

export default class Car implements IVehicle {
  drive(): void { console.log('Drive a car'); }

  fly(): void { console.log('I can not fly :-('); }
}
