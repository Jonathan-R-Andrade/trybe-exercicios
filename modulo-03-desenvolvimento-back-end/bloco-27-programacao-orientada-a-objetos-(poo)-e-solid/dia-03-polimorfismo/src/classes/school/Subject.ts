export default class Subject {
  private _name: string;

  constructor(name: string) {
    if (name.length < 3) throw new Error('Invalid name.');
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
}
