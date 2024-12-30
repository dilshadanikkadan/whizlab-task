"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("../domain/service/service"));
const repository_1 = __importDefault(require("../infrastructure/mongo/repository"));
const schema_1 = require("../infrastructure/mongo/schema");
class InventroryController {
    inventroryService;
    constructor(inventroryService) {
        this.inventroryService = inventroryService;
        this.buildInventory = this.buildInventory.bind(this);
        this.getAllInentory = this.getAllInentory.bind(this);
        this.getInventory = this.getInventory.bind(this);
        this.updateInventory = this.updateInventory.bind(this);
        this.deleteInventory = this.deleteInventory.bind(this);
    }
    async buildInventory(req, res, next) {
        const { body } = req;
        try {
            const response = await this.inventroryService.buildInventory(body);
            res.status(201).json(response);
        }
        catch (error) {
            next(error);
        }
    }
    async getAllInentory(req, res, next) {
        try {
            const response = await this.inventroryService.getAllInventory();
            res.status(200).json(response);
        }
        catch (error) {
            next(error);
        }
    }
    async getInventory(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.inventroryService.getInventory(id);
            res.status(200).json(response);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteInventory(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.inventroryService.deleteInventory(id);
            res.status(200).json("successfulley deleted");
        }
        catch (error) {
            next(error);
        }
    }
    async updateInventory(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.inventroryService.updateInventory(id, req.body);
            res.status(200).json("successfulle deleted");
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new InventroryController(new service_1.default(new repository_1.default(schema_1.InventoryModel)));
