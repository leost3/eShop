import Coupon from './Coupon'
import Id from './Id'
import OrderItem from './OrderItem'

export default class Order {
  id: Id;
  items: OrderItem[];
  coupon?: Coupon;
  constructor(id: string) {
    this.id = new Id(id);
    this.items = [];
  }

  addItem(description: string, quantity: number, price: number) {
    this.items.push(new OrderItem(description, quantity, price));
  }

  applyCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }
  getTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.getTotal();
    }

    if (this.coupon) {
      total -= (total * this.coupon.percentage) / 100;
    }
    return total;
  }
}
