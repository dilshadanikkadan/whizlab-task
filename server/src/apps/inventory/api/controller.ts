import { NextFunction, Request, Response } from "express";
import InventroryService from "../domain/service/service";
import InventroryRepository from "../infrastructure/mongo/repository";
import { InventoryModel } from "../infrastructure/mongo/schema";
import { InventroyDto } from "../domain/dtos/inventory.dtos";

class InventroryController {
  constructor(private inventroryService: InventroryService) {
    
    //  binding all method with own class ctx

    this.buildInventory = this.buildInventory.bind(this);
    this.getAllInentory = this.getAllInentory.bind(this);
    this.getInventory = this.getInventory.bind(this);
    this.updateInventory = this.updateInventory.bind(this);
    this.deleteInventory = this.deleteInventory.bind(this);
  }

  public async buildInventory(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    try {
      const response = await this.inventroryService.buildInventory(body);

      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  public async getAllInentory(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.inventroryService.getAllInventory();

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  public async getInventory(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const response = await this.inventroryService.getInventory(id);

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  public async deleteInventory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const response = await this.inventroryService.deleteInventory(id);

      res.status(200).json("successfulley deleted");
    } catch (error) {
      next(error);
    }
  }

  public async updateInventory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const response = await this.inventroryService.updateInventory(
        id,
        <Partial<InventroyDto>>req.body
      );

      res.status(200).json("successfulle deleted");
    } catch (error) {
      next(error);
    }
  }
}


/**
 * Performing Dependency injection for loose coupling between classes
 */ 
export default new InventroryController(
  new InventroryService(new InventroryRepository(InventoryModel))
);
