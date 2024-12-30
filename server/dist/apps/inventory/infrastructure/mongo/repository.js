"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
const mongoose_1 = __importDefault(require("mongoose"));
const objectId_error_1 = require("../../../../lib/exception/objectId.error");
class InventroryRepository {
    inevntoryModel;
    constructor(inevntoryModel) {
        this.inevntoryModel = inevntoryModel;
    }
    async createNewInventory(payload) {
        const newInventory = new this.inevntoryModel({
            ...payload,
        });
        await newInventory.save();
        return newInventory;
    }
    async isExistAlredy(name) {
        const res = await schema_1.InventoryModel.find({ itemName: name });
        console.log(res);
        if (res.length)
            return true;
        return false;
    }
    async getAllDoc() {
        return this.inevntoryModel.find();
    }
    async getSingleDoc(id) {
        if (!mongoose_1.default.isValidObjectId(id))
            throw new objectId_error_1.ObjectIdError();
        return await this.inevntoryModel.findById(id);
    }
    async deleteSingleDoc(id) {
        console.log("object id", id);
        if (!mongoose_1.default.isValidObjectId(id))
            throw new objectId_error_1.ObjectIdError();
        return await this.inevntoryModel.findByIdAndDelete(id.trim());
    }
    async updateDoc(id, payload) {
        if (!mongoose_1.default.isValidObjectId(id))
            throw new objectId_error_1.ObjectIdError();
        return await this.inevntoryModel.findByIdAndUpdate(id, {
            $set: {
                ...payload,
            },
        }, {
            new: true,
        });
    }
}
exports.default = InventroryRepository;
