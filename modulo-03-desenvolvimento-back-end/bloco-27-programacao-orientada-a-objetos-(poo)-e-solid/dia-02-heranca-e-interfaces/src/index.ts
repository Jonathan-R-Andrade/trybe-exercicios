import Date from "./classes/Date";
import Person from "./classes/Person";
import Student from "./classes/Student";
import Subject from "./classes/Subject";

const person1 = new Person('João', new Date(1, 1, 1996));
const person2 = new Person('Maria', new Date(2, 2, 1998));

console.log();
console.log(`${person1.name} nasceu no dia ${person1.birthDate}`);
console.log(`${person2.name} nasceu no dia ${person2.birthDate}`);

console.log('\n----------------------------------------------------');

const students = [
  new Student('Student-1', new Date(1, 2, 1996)),
  new Student('Student-2', new Date(3, 4, 1997)),
  new Student('Student-3', new Date(5, 6, 1998)),
  new Student('Student-4', new Date(7, 8, 1999)),
  new Student('Student-5', new Date(9, 10, 2000)),
]

const randomGrade = () => Math.random() * 10;

students.forEach((student) => {
  student.examsGrades = [randomGrade(), randomGrade(), randomGrade(), randomGrade()];
  student.worksGrades = [randomGrade(), randomGrade()];
});

students.forEach((student) => {
  console.log(`
Nome: ${student.name}
Data de nascimento: ${student.birthDate}
Matrícula: ${student.enrollment}
Soma das notas: ${student.sumGrades()}
Média das notas: ${student.averageGrade()}
  `);
});

console.log('----------------------------------------------------\n');

const subjects = [
  new Subject('Matemática'),
  new Subject('História'),
  new Subject('Filosofia'),
];

console.log('Disciplinas: ', subjects.map((subject) => subject.name), '\n');
