export default class OrderItem {
  private _name!: string;
  private _price!: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    if (name.length < 3) {
      throw new Error('The name must be at least 16 characters long.');
    }
    this._name = name;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    if (price < 0) {
      throw new Error('The price cannot be negative.');
    }
    this._price = price;
  }
}
