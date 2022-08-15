import { createHash } from "crypto";
import Date from "../classes/Date";
import Enrollable from "../interfaces/Enrollable";
import Person from "./Person";

export default class Employee extends Person implements Enrollable {
  private _enrollment: string = '';
  private _salary: number = 0;
  private _admissionDate: Date = new Date().now();

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    this.salary = salary;
    this.enrollment = this.generateEnrollment();
  }

  public generateEnrollment(): string {
    const data = `${this.name}${this.birthDate}${global.Date.now()}${Math.random()}`
    return createHash('sha256').update(data, 'utf-8').digest('hex');
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(enrollment: string) {
    if (enrollment.length < 16) {
      throw new Error('The enrollment must be at least 16 characters long.');
    }
    this._enrollment = enrollment;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(salary: number) {
    if (salary < 0) throw new Error('Salary cannot be negative.');
    this._salary = salary;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }

  public set admissionDate(admissionDate: Date) {
    const today = new Date().now();
    if (admissionDate.compare(today) === 1) {
      throw new Error('Invalid date. Are you from the future?');
    }
    this._admissionDate = admissionDate;
  }
}
