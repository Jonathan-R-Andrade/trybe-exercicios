import Date from "./classes/Date";
import Customer from "./classes/restaurant/Customer";
import Order from "./classes/restaurant/Order";
import OrderItem from "./classes/restaurant/OrderItem";
import Student from "./classes/Student";

const student = new Student('Fulano', 'DEV', [10, 10, 10, 10], [10, 10]);

console.log(`\nNotas de ${student.name}:`);
console.log(`Total das notas ${student.sumGrades()}`);
console.log(`Média das notas ${student.averageGrade()}`);

console.log('\n----------------------------------------------\n');

const customer = new Customer('Carinha ali em cima');
const items = [
  new OrderItem('Café', 5),
  new OrderItem('Energético', 10),
  new OrderItem('Bolo', 15),
];

const order = new Order(customer, items, 'card', 0.15);

console.log(`${customer.name} deve ${order.totalToPay()} reais para o seu Zé`);
console.log(`Mas com desconto ele deve ${order.totalToPayWithDiscount()} reais`);

console.log('\n----------------------------------------------\n');

const date1 = new Date(8, 11, 2021);
const date2 = new Date(1, 1, 2023);
const date3 = new Date(1, 1, 2024);

console.log(date1.format('dd/mm/aaaa'));
console.log(date1.format('aaaa-mm-dd'));
console.log(date1.format('dd de M de aa'));
console.log(date1.format('dd, M de aaaa'), '\n');

console.log(date2.year, 'é bissexto?', date2.isLeapYear() ? 'sim' : 'não');
console.log(date3.year, 'é bissexto?', date3.isLeapYear() ? 'sim' : 'não', '\n');

const comparation = date1.compare(date2);
let isLater: string;

switch (comparation) {
  case 1:
    isLater = 'sim';
    break;
  case -1:
    isLater = 'não';
    break;
  default:
    isLater = 'são iguais';
}

console.log(
  date1.format('dd/mm/aaaa'),
  'é posterior à',
  `${date2.format('dd/mm/aaaa')}?`,
  isLater,
  '\n'
);
