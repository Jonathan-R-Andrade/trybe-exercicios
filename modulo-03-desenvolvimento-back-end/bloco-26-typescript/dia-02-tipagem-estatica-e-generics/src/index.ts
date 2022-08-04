import Car from "./classes/Car";
import Color from "./enums/Color";
import CommonPizza from "./interfaces/CommonPizza";
import SweetPizza from "./interfaces/SweetPizza";
import VegetarianPizza from "./interfaces/VegetarianPizza";
import pickUpPassenger from "./scripts/pickUpPassenger";

const car = new Car('volkswagen', Color.PRATA, 4);

pickUpPassenger(car);

console.log('\n\n=================================================================\n\n');

const commonPizzas: CommonPizza[] = [
  { flavor: 'Calabresa', slices: 4 },
  { flavor: 'Frango', slices: 6 },
  { flavor: 'Pepperoni', slices: 8 },
];

const vegetarianPizzas: VegetarianPizza[] = [
  { flavor: 'Marguerita', slices: 6 },
  { flavor: 'Palmito', slices: 8 },
];

const sweetPizzas: SweetPizza[] = [
  { flavor: 'Nutela', slices: 4 },
];

console.log(commonPizzas);
console.log(vegetarianPizzas);
console.log(sweetPizzas);
