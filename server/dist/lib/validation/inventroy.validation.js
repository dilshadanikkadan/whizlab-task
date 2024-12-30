"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryValidation = void 0;
const express_validator_1 = require("express-validator");
exports.inventoryValidation = [
    (0, express_validator_1.body)("itemName")
        .trim()
        .notEmpty()
        .withMessage("You must provide an item name"),
    (0, express_validator_1.body)("price")
        .trim()
        .notEmpty()
        .withMessage("You must provide a price"),
    (0, express_validator_1.body)("quantity")
        .trim()
        .notEmpty()
        .withMessage("You must provide a quantity"),
    (0, express_validator_1.body)("description")
        .trim()
        .notEmpty()
        .withMessage("You must provide a description"),
];
