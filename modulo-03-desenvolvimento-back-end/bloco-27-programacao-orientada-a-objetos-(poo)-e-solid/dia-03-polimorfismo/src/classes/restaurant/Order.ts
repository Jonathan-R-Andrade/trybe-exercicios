import Person from "../Person";
import OrderItem from "./OrderItem";

export type PaymentMethod = 'dinheiro' | 'cartão' | 'vale';

export default class Order {
  private _items!: OrderItem[];
  private _discount?: number;

  constructor(
    public client: Person,
    public paymentMethod: PaymentMethod,
    items: OrderItem[],
    discount?: number,
  ) {
    if (items.length < 1) throw new Error('The order must have at least one item.');
    if (discount && discount < 0) throw new Error('The discount cannot be negative.');
    this._items = items;
    this._discount = discount;
  }

  public calculateTotal(): number {
    return this._items.reduce((acc, { price }) => acc + price, 0);
  }

  public calculateTotalWithDiscount(): number {
    const calculateTotal = this.calculateTotal();
    const discount = this._discount && this._discount > 0
      ? this._discount * calculateTotal : 0;
    return calculateTotal - discount;
  }
}
