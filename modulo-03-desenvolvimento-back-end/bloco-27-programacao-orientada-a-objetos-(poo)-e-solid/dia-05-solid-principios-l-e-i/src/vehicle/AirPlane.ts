import IVehicle from './interfaces/IVehicle';

export default class AirPlane implements IVehicle {
  drive(): void { console.log('I can not do it! :-('); }

  fly(): void { console.log('Flying an airplane'); }
}
