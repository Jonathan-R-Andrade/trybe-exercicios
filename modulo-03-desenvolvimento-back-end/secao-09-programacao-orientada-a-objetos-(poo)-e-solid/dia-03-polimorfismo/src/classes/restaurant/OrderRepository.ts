import Person from "../Person";
import Order from "./Order";

export default class OrderRepository {
  private _orders: Order[] = [];

  public addOrder(order: Order): void {
    this._orders.push(order);
  }

  public removeOrder(order: Order): void {
    this._orders = this._orders.filter(({ id }) => order.id !== id);
  }

  public listByClient(client: Person): Order[] {
    return this._orders.filter(({ client: { name, birthDate } }) => {
      return client.name === name && client.birthDate === birthDate;
    });
  }

  public listBySortedValue(sortDirection: 'maior' | 'menor'): Order[] {
    return this._orders.sort((orderA, orderB) => {
      const orderAValue = orderA.calculateTotal();
      const orderBValue = orderB.calculateTotal();
      if (orderAValue === orderBValue) return 0
      if (sortDirection === 'maior') return orderAValue > orderBValue ? -1 : 1;
      return orderAValue > orderBValue ? 1 : -1;
    });
  }
}
