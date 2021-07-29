import Coupon from './Coupon'
import Order from './Order'
import { PlaceOrderInput } from './PlaceOrderInput'

export default class PlaceOrder {
  coupons: Coupon[];
  orders: Order[];
  constructor() {
    this.coupons = [new Coupon("NBA20", 20)];
    this.orders = [];
  }

  execute(input: PlaceOrderInput) {
    const order = new Order(input.id);
    for (const item of input.items) {
      order.addItem(item.description, item.quantity, item.price);
    }
    const coupon = this.coupons.find(({code}) => code === input.coupon);
    if (input.coupon && coupon) {
      order.applyCoupon(coupon);
    }
    this.orders.push(order);
    return {
      total: order.getTotal(),
    };
  }
}
