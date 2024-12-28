import request from "supertest";
import app from "../..";

it('returns 200 if inventory item is updated successfully', async () => {

    const createResponse = await request(app)
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

    const updateResponse = await request(app)
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