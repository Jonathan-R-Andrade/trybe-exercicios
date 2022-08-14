import Date from "./classes/Date";
import Person from "./classes/Person";

const person1 = new Person('João', new Date(1, 1, 1996));
const person2 = new Person('Maria', new Date(2, 2, 1998));

console.log(`${person1.name} nasceu no dia ${person1.birthDate}`);
console.log(`${person2.name} nasceu no dia ${person2.birthDate}`);
