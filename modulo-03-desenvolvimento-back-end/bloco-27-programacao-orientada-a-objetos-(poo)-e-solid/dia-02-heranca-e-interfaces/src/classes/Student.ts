import Person from "./Person";
import Date from "./Date";
import { createHash } from "crypto";

export default class Student extends Person {
  private _enrollment: string;

  constructor(
    name: string,
    birthDate: Date,
    public examsGrades: number[],
    public worksGrades: number[],
  ) {
    super(name, birthDate);
    this._enrollment = this._generateEnrollment();
  }

  private _generateEnrollment(): string {
    const data = `${this.name}${this.birthDate}${global.Date.now()}${Math.random()}`
    return createHash('sha256').update(data, 'utf-8').digest('hex');
  }

  public sumGrades(): number {
    const exams = this.examsGrades.reduce((acc, grade) => acc + grade);
    const works = this.worksGrades.reduce((acc, grade) => acc + grade);
    return exams + works;
  }

  public averageGrade(): number {
    return this.sumGrades() / (this.examsGrades.length + this.worksGrades.length);
  }

  public get enrollment(): string {
    return this._enrollment;
  }
}
