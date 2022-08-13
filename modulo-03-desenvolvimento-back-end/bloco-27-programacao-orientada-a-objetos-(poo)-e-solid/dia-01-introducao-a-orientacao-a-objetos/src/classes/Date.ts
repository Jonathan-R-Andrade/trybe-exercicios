import Months from "../enums/Months";

export default class Date {
  constructor(
    public day: number,
    public month: number,
    public year: number,
  ) {
    if (!this._isAValidDate()) {
      this.day = 1;
      this.month = 1;
      this.year = 1900;
    }
  }

  private _isAValidDate(): boolean {
    if (this.day < 1 || this.day > 31) return false;
    if (this.month < 1 || this.month > 12) return false;
    if (this.year < 1900) return false;
    if (this.day > this.getLastDayOfMonth()) return false;
    return true;
  }

  public getMonthName(): string {
    return Months[this.month];
  }

  public getLastDayOfMonth(): number {
    if (this.month === 2) return this.isLeapYear() ? 29 : 28;
    if (this.month <= 7) return this.month % 2 === 0 ? 30 : 31;
    return this.month % 2 === 0 ? 31 : 30;
  }

  public isLeapYear(): boolean {
    return (this.year % 400 === 0) || (this.year % 100 !== 0 && this.year % 4 === 0);
  }

  public compare(date: Date): number {
    if (this.year > date.year) return 1;
    if (this.year < date.year) return -1;
    if (this.month > date.month) return 1;
    if (this.month < date.month) return -1;
    if (this.day > date.day) return 1;
    if (this.day < date.day) return -1;
    return 0;
  }
}
