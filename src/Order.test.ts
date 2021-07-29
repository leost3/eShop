import Coupon from './Coupon'
import Order from './Order'

it("should not create an order with invalid id", () => {
  const id = "111.111.111-11";
  expect(() => new Order(id)).toThrow(new Error("invalid id"));
});

it("should create an order with 3 items", () => {
  const id = "142.629.450-65";
  const order = new Order(id);
  order.addItem("basketball", 1, 33);
  order.addItem("jersey", 3, 55);
  order.addItem("short", 2, 16);
  const total = order.getTotal();
  expect(order.items).toHaveLength(3);
  expect(total).toBe(230);
});

it("should create an order with a discount coupon", () => {
  const id = "142.629.450-65";
  const order = new Order(id);
  order.addItem("basketball", 1, 33);
  order.addItem("jersey", 3, 55);
  order.addItem("short", 2, 16);
  order.applyCoupon(new Coupon("NBA20", 20));
  const total = order.getTotal();
  expect(total).toBe(184);
});
