import Customer from "./Customer";
import OrderItem from "./OrderItem";

export default class Order {
  constructor(
    public customer: Customer,
    public orderItems: OrderItem[],
    public paymentMethod: 'cash' | 'card',
    public discount?: number,
  ) { }

  public totalToPay(): number {
    return this.orderItems.reduce((acc, { price }) => acc + price, 0);
  }

  public totalToPayWithDiscount(): number {
    const totalToPay = this.totalToPay();
    const discount = this.discount && this.discount > 0
      ? this.discount * totalToPay : 0;
    return totalToPay - discount;
  }
}
