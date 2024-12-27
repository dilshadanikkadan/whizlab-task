import { NextFunction, Request, Response } from "express";
import { InventroyDto } from "../dtos/inventory.dtos";
import InventroryRepository from "../../infrastructure/mongo/repository";
import { NotFoundError } from "../../../../lib/exception/not-fount.error";

class InventroryService {
  constructor(private iventoryRepository:  InventroryRepository) {
    
    this.buildInventory = this.buildInventory.bind(this)
    this.getAllInventory = this.getAllInventory.bind(this)
    this.getInventory = this.getInventory.bind(this)
    this.updateInventory = this.updateInventory.bind(this)
    this.deleteInventory = this.deleteInventory.bind(this)
  }

  public async buildInventory(payload: InventroyDto): Promise<any> {
    const isExist = await this.iventoryRepository.isExistAlredy(
      payload.itemName
    );

    if (isExist) throw new Error("already Exist!!!!!!");
    return await this.iventoryRepository.createNewInventory(payload);
  }

  public async getAllInventory(): Promise<any> {
    return await this.iventoryRepository.getAllDoc();
  }

  public async getInventory(id: string): Promise<any> {
    const res = await this.iventoryRepository.getSingleDoc(id);
    if (!res) throw new NotFoundError();
    return res
  }


  public async deleteInventory(id: string): Promise<any> {
    const res = await this.iventoryRepository.deleteSingleDoc(id);
    if (!res) throw new NotFoundError();
    return res
  }


  public async updateInventory(id: string,payload:Partial<InventroyDto>): Promise<any> {   
    const res = await this.iventoryRepository.updateDoc(id,payload);
    if (!res) throw new NotFoundError();
    return res
  }
}

export default  InventroryService ;
