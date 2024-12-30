"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require("../.."));
it('returns 201 if credential ok with create inventory', async () => {
    await (0, supertest_1.default)(__1.default)
        .post("/inventory")
        .send({
        itemName: "hp lap",
        price: 76666,
        quantity: 1,
        category: "Laptops",
        description: "this is good"
    })
        .expect(201);
});
it('returns 400  if credentail is missing in create inventory', async () => {
    await (0, supertest_1.default)(__1.default)
        .post("/inventory")
        .send({
        itemName: "",
        price: '',
        quantity: 1,
        category: "",
        description: "this is good"
    })
        .expect(400);
});
