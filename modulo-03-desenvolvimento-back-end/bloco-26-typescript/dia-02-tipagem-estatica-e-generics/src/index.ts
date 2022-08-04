import Car from "./classes/Car";
import Color from "./enums/Color";
import Pizza from "./interfaces/Pizza";
import pickUpPassenger from "./scripts/pickUpPassenger";

const car = new Car('volkswagen', Color.PRATA, 4);

pickUpPassenger(car);

console.log('\n\n=================================================================\n\n');

const pizzaCalabresa: Pizza = { flavor: 'Calabresa', slices: 4 }
const pizzaMarguerita: Pizza = { flavor: 'Marguerita', slices: 6 }
const pizzaNutela: Pizza = { flavor: ' Nutela', slices: 8 }

console.log(pizzaCalabresa);
console.log(pizzaMarguerita);
console.log(pizzaNutela);
