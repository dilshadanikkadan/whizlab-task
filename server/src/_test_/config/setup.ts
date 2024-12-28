import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

declare global {
  namespace NodeJS {
    interface Global {
      signin(): string[];
    }
  }
}

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = 'dilu';
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  mongo = new MongoMemoryServer();
  await mongo.start();

  const uri = await mongo.getUri();

  const mongooseOptions = {
    useNewUrlParser: true,
  };

  await mongoose.connect(uri);
});

beforeEach(async () => {
  const db = mongoose.connection.db;

  if (db) {
    const collections = await db.collections();

    for (let collection of collections) {
      await collection.deleteMany({});
    }
  } else {
    throw new Error('Database connection is not established');
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
