"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("./Coupon"));
const Order_1 = __importDefault(require("./Order"));
it("should not create an order with invalid id", () => {
    const id = "111.111.111-11";
    expect(() => new Order_1.default(id)).toThrow(new Error("invalid id"));
});
it("should create an order with 3 items", () => {
    const id = "142.629.450-65";
    const order = new Order_1.default(id);
    order.addItem("basketball", 1, 33);
    order.addItem("jersey", 3, 55);
    order.addItem("short", 2, 16);
    const total = order.getTotal();
    expect(order.items).toHaveLength(3);
    expect(total).toBe(230);
});
it("should create an order with a discount coupon", () => {
    const id = "142.629.450-65";
    const order = new Order_1.default(id);
    order.addItem("basketball", 1, 33);
    order.addItem("jersey", 3, 55);
    order.addItem("short", 2, 16);
    order.applyCoupon(new Coupon_1.default("NBA20", 20));
    const total = order.getTotal();
    expect(total).toBe(184);
});
