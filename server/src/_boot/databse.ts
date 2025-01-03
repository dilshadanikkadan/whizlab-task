import mongoose from "mongoose";
import { config } from "../_boot/config";

  /*
    booting the database connection
  */
export default async () => {
  try {
    const conn = await mongoose.connect(config.mongo.database);
    console.log(`🍃 Database Established connection with MongoDB`);
    console.log(`@-${conn.connection.host}`);
  } catch (error: any) {
    console.error(`❌ Database Connection failed`);
    console.error(error.message);
    process.exit(1);
  }
};