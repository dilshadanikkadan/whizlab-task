"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require("../.."));
it('returns 200 if getting all inventories which added', async () => {
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
    const response = await (0, supertest_1.default)(__1.default)
        .get('/inventory')
        .expect(200);
    expect(response.body).toBeTruthy();
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
});
