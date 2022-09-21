import Date from "./Date";
import Person from "./Person";
import Subject from "./Subject";
import Employee from "../interfaces/Employee";
import { createHash } from "crypto";

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string;
  private _salary: number = 0;
  private _admissionDate: Date = new Date().now();

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    if (salary < 0) throw new Error('Salary cannot be negative.');
    this.salary = salary;
    this._subject = subject;
    this._registration = this.generateRegistration();
  }

  public generateRegistration(): string {
    const data = `${this.name}${this.birthDate}${global.Date.now()}${Math.random()}`
    return createHash('sha256').update(data, 'utf-8').digest('hex');
  }

  public get subject(): string {
    return this._subject.name;
  }

  public get registration(): string {
    return this._registration;
  }

  public set registration(registration: string) {
    if (registration.length < 16) {
      throw new Error('The registration must be at least 16 characters long.');
    }
    this._registration = registration;
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
