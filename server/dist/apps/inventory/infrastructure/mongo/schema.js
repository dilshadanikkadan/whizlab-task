"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryModel = void 0;
const mongoose_1 = require("mongoose");
const inventorySchema = new mongoose_1.Schema({
    itemName: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    category: {
        type: String,
    },
    description: {
        type: String,
    },
}, {
    timestamps: true,
});
exports.InventoryModel = (0, mongoose_1.model)("inventory", inventorySchema);
