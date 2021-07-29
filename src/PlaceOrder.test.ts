import PlaceOrder from './PlaceOrder'
import { PlaceOrderInput } from './PlaceOrderInput'

it("should place an order", () => {
  const input = {
    id: "142.629.450-65",
    items: [
      { description: "basketball", quantity: 1, price: 33 },
      { description: "jersey", quantity: 3, price: 55 },
      { description: "short", quantity: 2, price: 16 },
    ],
    coupon: "NBA20",
  } as PlaceOrderInput;
  const placeOrder = new PlaceOrder();
  const output = placeOrder.execute(input);
  expect(output.total).toBe(184);
});
