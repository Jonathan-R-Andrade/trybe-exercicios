import IAirVehicle from './interfaces/IAirVehicle';

export default class AirPlane implements IAirVehicle {
  start(): void { console.log('Starting an airplane'); }

  stop(): void { console.log('Stopping an airplane'); }

  fly(): void { console.log('Flying an airplane'); }
}
