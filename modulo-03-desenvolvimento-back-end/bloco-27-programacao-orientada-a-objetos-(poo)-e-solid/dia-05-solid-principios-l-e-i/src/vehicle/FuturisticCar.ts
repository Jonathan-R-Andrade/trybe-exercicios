import IFuturisticVehicle from './interfaces/IFuturisticVehicle';

export default class FuturisticCar implements IFuturisticVehicle {
  start(): void { console.log('Starting a futuristic car'); }

  stop(): void { console.log('Stopping a futuristic car'); }

  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
