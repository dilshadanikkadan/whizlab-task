import { body } from "express-validator";

export const inventoryValidation = [
  body("itemName")
    .trim()
    .notEmpty()
    .withMessage("You must provide an item name"),
  body("price")
    .trim()
    .notEmpty()
    .withMessage("You must provide a price"),
  body("quantity")
    .trim()
    .notEmpty()
    .withMessage("You must provide a quantity"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("You must provide a description"),
];
