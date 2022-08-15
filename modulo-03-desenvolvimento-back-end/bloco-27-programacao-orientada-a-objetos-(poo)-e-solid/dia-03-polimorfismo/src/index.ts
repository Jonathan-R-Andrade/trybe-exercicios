import Date from "./classes/Date";
import Student from "./classes/Student";
import Subject from "./classes/Subject";
import Teacher from "./classes/Teacher";

const students = [
  new Student('Student-1', new Date(1, 2, 2000)),
  new Student('Student-2', new Date(3, 4, 2001)),
];

const randomGrade = () => Math.random() * 10;

students.forEach((student) => {
  student.examsGrades = [randomGrade(), randomGrade(), randomGrade(), randomGrade()];
  student.worksGrades = [randomGrade(), randomGrade()];
});

const subjects = [
  new Subject('Matemática'),
  new Subject('História'),
];

const teachers = [
  new Teacher('Teacher-1', new Date(1, 2, 1980), 4000, subjects[0]),
  new Teacher('Teacher-2', new Date(3, 4, 1981), 4000, subjects[1]),
];

students.forEach((student) => {
  console.log(`
Nome: ${student.name}
Data de nascimento: ${student.birthDate}
Matrícula: ${student.enrollment}
Soma das notas: ${student.sumGrades()}
Média das notas: ${student.averageGrade()}
  `);
});

teachers.forEach((teacher) => {
  console.log(`
Nome: ${teacher.name}
Data de nascimento: ${teacher.birthDate}
Registro: ${teacher.enrollment}
Disciplina: ${teacher.subject}
Data de admissão: ${teacher.admissionDate.format('dd/mm/aaaa')}
Salário: ${teacher.salary}
  `);
});
