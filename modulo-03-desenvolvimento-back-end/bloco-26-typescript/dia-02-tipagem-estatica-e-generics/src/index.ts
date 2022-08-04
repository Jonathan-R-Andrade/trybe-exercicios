import Car from "./classes/Car";
import Color from "./enums/Color";
import pickUpPassenger from "./scripts/pickUpPassenger";

const car = new Car('volkswagen', Color.PRATA, 4);

pickUpPassenger(car);
