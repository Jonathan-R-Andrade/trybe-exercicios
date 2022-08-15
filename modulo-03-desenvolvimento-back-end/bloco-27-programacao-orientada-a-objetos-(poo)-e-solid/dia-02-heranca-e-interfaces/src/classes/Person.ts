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

  private _checkBirthDate(): void {
    const today = new Date().now();
    if (this._birthDate.compare(today) !== -1
      || (today.year - this._birthDate.year) > 120) {
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
