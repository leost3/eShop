import OrderItem from './OrderItem'

export class PlaceOrderInput {
  id: string;
  items: OrderItem[];
  coupon?: string;
  constructor(id: string, items: OrderItem[], coupon: string) {
    this.id = id;
    this.items = items;
    this.coupon = coupon;
  }
}
