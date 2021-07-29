"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Id_1 = __importDefault(require("./Id"));
const OrderItem_1 = __importDefault(require("./OrderItem"));
class Order {
    constructor(id) {
        this.id = new Id_1.default(id);
        this.items = [];
    }
    addItem(description, quantity, price) {
        this.items.push(new OrderItem_1.default(description, quantity, price));
    }
    applyCoupon(coupon) {
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
exports.default = Order;
