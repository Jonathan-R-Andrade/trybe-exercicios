import Color from "../enums/Color";
import Direction from "../enums/Direction";
import Door from "../enums/Door";

export default class Car {
  brand: string;
  color: Color;
  doors: number;

  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Buzinando.');
  }

  openTheDoor(door: Door): void {
    console.log(`Porta ${Door[door]} aberta.`);
  }

  closeTheDoor(door: Door): void {
    console.log(`Porta ${Door[door]} fechada.`);
  }

  turnOn(): void {
    console.log('Carro ligado.');
  }

  turnOff(): void {
    console.log('Carro desligado.');
  }

  speedUp(): void {
    console.log('Acelerando.');
  }

  speedDown(): void {
    console.log('Desacelerando.');
  }

  stop(): void {
    console.log('Parando.');
  }

  turn(direction: Direction): void {
    console.log(`Virando para ${direction}.`);
  }
}
