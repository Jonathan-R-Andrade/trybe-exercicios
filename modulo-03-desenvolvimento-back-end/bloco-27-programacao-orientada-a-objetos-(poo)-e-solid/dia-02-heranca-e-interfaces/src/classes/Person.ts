import Date from "./Date";

export default class Person {
  constructor(
    private _name: string,
    private _birthDate: Date,
  ) {
    this._checkName();
    this._checkBirthDate();
  }

  private _checkName(): void {
    if (this.name.length < 3) throw new Error('Invalid name.');
  }

  private _getCurrentDayMonthAndYear(): { day: number, month: number, year: number } {
    const now = new global.Date();
    return {
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
    }
  }

  private _checkBirthDate(): void {
    const { day, month, year } = this._getCurrentDayMonthAndYear();
    const today = new Date(day, month, year);
    if (this._birthDate.compare(today) !== -1 || (year - this._birthDate.year) > 120) {
      throw new Error('Invalid birthdate.');
    }
  }

  public get name(): string {
    return this._name;
  }

  public get birthDate(): string {
    return this._birthDate.format('dd/mm/aaaa');
  }
}
