import Person from "./Person";
import Date from "./Date";

export default class Student extends Person {
  constructor(
    name: string,
    birthDate: Date,
    public enrollment: string,
    public examsGrades: number[],
    public worksGrades: number[],
  ) {
    super(name, birthDate);
  }

  public sumGrades(): number {
    const exams = this.examsGrades.reduce((acc, grade) => acc + grade);
    const works = this.worksGrades.reduce((acc, grade) => acc + grade);
    return exams + works;
  }

  public averageGrade(): number {
    return this.sumGrades() / (this.examsGrades.length + this.worksGrades.length);
  }
}
