"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("./Coupon"));
const Order_1 = __importDefault(require("./Order"));
class PlaceOrder {
    constructor() {
        this.coupons = [new Coupon_1.default("NBA20", 20)];
        this.orders = [];
    }
    execute(input) {
        const order = new Order_1.default(input.id);
        for (const item of input.items) {
            order.addItem(item.description, item.quantity, item.price);
        }
        const coupon = this.coupons.find(({ code }) => code === input.coupon);
        if (input.coupon && coupon) {
            order.applyCoupon(coupon);
        }
        this.orders.push(order);
        return {
            total: order.getTotal(),
        };
    }
}
exports.default = PlaceOrder;
