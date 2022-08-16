import Date from "./classes/Date";
import EvaluationResult from "./classes/EvaluationResult";
import Exam from "./classes/Exam";
import Student from "./classes/Student";
import Subject from "./classes/Subject";
import Teacher from "./classes/Teacher";
import Work from "./classes/Work";

const randomGrade = (max: number) => Math.round(Math.random() * max);

const subjects = [
  new Subject('Matemática'),
  new Subject('História'),
];

const teachers = [
  new Teacher('Teacher-1', new Date(1, 2, 1980), 4000, subjects[0]),
  new Teacher('Teacher-2', new Date(3, 4, 1981), 4000, subjects[1]),
];

const works = [new Work(50, teachers[0]), new Work(50, teachers[1])];
const exams = [new Exam(25, teachers[0]), new Work(25, teachers[1])];

const students = [
  new Student('Student-1', new Date(1, 2, 2000)),
  new Student('Student-2', new Date(3, 4, 2001)),
];

students[0].addEvaluationResult(new EvaluationResult(works[0], randomGrade(50)));
students[0].addEvaluationResult(new EvaluationResult(exams[0], randomGrade(25)));
students[1].addEvaluationResult(new EvaluationResult(works[1], randomGrade(50)));
students[1].addEvaluationResult(new EvaluationResult(exams[1], randomGrade(25)));

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
