import request from "supertest";
import app from "../..";

it('returns 200 if getting all inventories which added',async()=>{

    await request(app)
    .post("/inventory")
    .send({
     itemName:"hp lap",
     price:76666,
     quantity:1,
     category:"Laptops",
     description:"this is good"
    })  
    .expect(201)

    const response = await request(app)
    .get('/inventory')
    .expect(200);
    console.log(response.body);
    
    expect(response.body).toBeTruthy();
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
})
