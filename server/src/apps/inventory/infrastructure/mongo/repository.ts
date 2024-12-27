import { NextFunction, Request, Response } from "express";
import { InventroyDto } from "../../domain/dtos/inventory.dtos";
import { InventoryModel } from "./schema";
import mongoose from "mongoose";
import { ObjectIdError } from "../../../../lib/exception/objectId.error";

class InventroryRepository {
  constructor(private readonly inevntoryModel: typeof InventoryModel) {}

  public async createNewInventory(payload: InventroyDto): Promise<any> {
    const newInventory = new this.inevntoryModel({
      ...payload,
    });
    await newInventory.save();
    return newInventory;
  }

  public async isExistAlredy(name: string): Promise<any> {
    const res = await InventoryModel.find({ itemName: name });
    console.log(res);

    if (res.length) return true;
    return false;
  }

  public async getAllDoc() {
    return this.inevntoryModel.find();
  }

  public async getSingleDoc(id: string) {
    if (!mongoose.isValidObjectId(id)) throw new ObjectIdError();
    return await this.inevntoryModel.findById(id);
  }

  public async deleteSingleDoc(id: string) {
    if (!mongoose.isValidObjectId(id)) throw new ObjectIdError();
    return await this.inevntoryModel.findByIdAndDelete(id);
  }
  public async updateDoc(id: string, payload: Partial<InventroyDto>) {
    if (!mongoose.isValidObjectId(id)) throw new ObjectIdError();
    return await this.inevntoryModel.findByIdAndUpdate(
      id,
      {
        $set: {
          ...payload,
        },
      },
      {
        new: true,
      }
    );
  }
}

export default InventroryRepository;
