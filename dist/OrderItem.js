"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(description, quantity, price) {
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
    getTotal() {
        return this.price * this.quantity;
    }
}
exports.default = OrderItem;
