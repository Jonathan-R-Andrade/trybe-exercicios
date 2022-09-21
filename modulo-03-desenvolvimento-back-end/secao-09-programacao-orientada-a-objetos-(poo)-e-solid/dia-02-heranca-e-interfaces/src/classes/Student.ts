import Person from "./Person";
import Date from "./Date";
import { createHash } from "crypto";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(
    name: string,
    birthDate: Date,
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

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }

  public set examsGrades(examsGrades: number[]) {
    if (examsGrades.length > 4) throw new Error('Maximum 4 exams grades are allowed.');
    this._examsGrades = examsGrades;
  }

  public set worksGrades(worksGrades: number[]) {
    if (worksGrades.length > 2) throw new Error('Maximum 2 works grades are allowed.');
    this._worksGrades = worksGrades;
  }
}
