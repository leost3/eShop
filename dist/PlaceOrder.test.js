"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlaceOrder_1 = __importDefault(require("./PlaceOrder"));
it("should place an order", () => {
    const input = {
        id: "142.629.450-65",
        items: [
            { description: "basketball", quantity: 1, price: 33 },
            { description: "jersey", quantity: 3, price: 55 },
            { description: "short", quantity: 2, price: 16 },
        ],
        coupon: "NBA20",
    };
    const placeOrder = new PlaceOrder_1.default();
    const output = placeOrder.execute(input);
    expect(output.total).toBe(184);
});
