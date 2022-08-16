import Person from "./Person";
import Date from "./Date";
import { createHash } from "crypto";
import Enrollable from "../interfaces/Enrollable";
import EvaluationResult from "./EvaluationResult";

export default class Student extends Person implements Enrollable {
  private _enrollment: string;
  private _evaluationsResults: EvaluationResult[] = [];

  constructor(
    name: string,
    birthDate: Date,
  ) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  public generateEnrollment(): string {
    const data = `${this.name}${this.birthDate}${global.Date.now()}${Math.random()}`
    return createHash('sha256').update(data, 'utf-8').digest('hex');
  }

  public sumGrades(): number {
    return this._evaluationsResults.reduce((acc, { score }) => acc + score, 0);
  }

  public averageGrade(): number {
    return this.sumGrades() / this._evaluationsResults.length;
  }

  public addEvaluationResult(evaluationsResult: EvaluationResult): void {
    this._evaluationsResults.push(evaluationsResult);
  }

  public get enrollment(): string {
    return this._enrollment;
  }
}
