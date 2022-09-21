import Date from "../Date";
import Subject from "./Subject";
import Employee from "../Employee";

export default class Teacher extends Employee {
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate, salary);
    this._subject = subject;
  }

  public get subject(): string {
    return this._subject.name;
  }
}
