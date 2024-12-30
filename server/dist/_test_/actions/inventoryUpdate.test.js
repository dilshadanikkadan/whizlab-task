"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require("../.."));
it('returns 200 if inventory item is updated successfully', async () => {
    const createResponse = await (0, supertest_1.default)(__1.default)
        .post("/inventory")
        .send({
        itemName: "hp lap",
        price: 76666,
        quantity: 1,
        category: "Laptops",
        description: "this is good"
    })
        .expect(201);
    const itemId = createResponse.body._id;
    const updateResponse = await (0, supertest_1.default)(__1.default)
        .put(`/inventory/${itemId}`)
        .send({
        itemName: "hp laptop updated",
        price: 80000,
        quantity: 2,
        category: "Laptops",
        description: "this is updated description ):"
    })
        .expect(200);
    console.log(updateResponse.body);
    expect(updateResponse.body).toBeTruthy();
});
