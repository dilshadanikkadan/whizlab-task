import server from "../_boot/server";
import app from "../index";
import database from "../_boot/databse";


 /*
    this is the main fn() in boot will be called in index file
  */
 
export const main = async () => {

    try {
        
        await server(app);
        
        await database();
        
        process.on('SIGTERM', async () => {
            console.info("SIGTERM received")
        })

    } catch (error: any) {
        console.log(`Oops!`, error?.message);
    }
};