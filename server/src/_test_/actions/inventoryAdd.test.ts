import request from "supertest";
import app from "../..";


it('returns 201 if credential ok with create inventory',async()=>{

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
})



it('returns 400  if credentail is missing in create inventory',async()=>{

    await request(app)
    .post("/inventory")
    .send({
     itemName:"",
     price:'',
     quantity:1,
     category:"",
     description:"this is good"
    })  
    .expect(400)


})

