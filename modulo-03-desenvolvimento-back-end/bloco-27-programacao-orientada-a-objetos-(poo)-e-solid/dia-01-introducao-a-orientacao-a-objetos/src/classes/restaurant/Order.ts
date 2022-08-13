import Customer from "./Customer";
import OrderItem from "./OrderItem";

export default class Order {
  constructor(
    public customer: Customer,
    public orderItems: OrderItem[],
    public paymentMethod: 'cash' | 'card',
    public discount?: number,
  ) { }
}
