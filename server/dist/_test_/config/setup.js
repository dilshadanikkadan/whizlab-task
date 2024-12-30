"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
let mongo;
beforeAll(async () => {
    process.env.JWT_KEY = 'dilu';
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    mongo = new mongodb_memory_server_1.MongoMemoryServer();
    await mongo.start();
    const uri = await mongo.getUri();
    const mongooseOptions = {
        useNewUrlParser: true,
    };
    await mongoose_1.default.connect(uri);
});
beforeEach(async () => {
    const db = mongoose_1.default.connection.db;
    if (db) {
        const collections = await db.collections();
        for (let collection of collections) {
            await collection.deleteMany({});
        }
    }
    else {
        throw new Error('Database connection is not established');
    }
});
afterAll(async () => {
    await mongo.stop();
    await mongoose_1.default.connection.close();
});
