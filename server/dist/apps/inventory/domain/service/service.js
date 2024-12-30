"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const not_fount_error_1 = require("../../../../lib/exception/not-fount.error");
class InventroryService {
    iventoryRepository;
    constructor(iventoryRepository) {
        this.iventoryRepository = iventoryRepository;
        this.buildInventory = this.buildInventory.bind(this);
        this.getAllInventory = this.getAllInventory.bind(this);
        this.getInventory = this.getInventory.bind(this);
        this.updateInventory = this.updateInventory.bind(this);
        this.deleteInventory = this.deleteInventory.bind(this);
    }
    async buildInventory(payload) {
        const isExist = await this.iventoryRepository.isExistAlredy(payload.itemName);
        if (isExist)
            throw new Error("already Exist!!!!!!");
        return await this.iventoryRepository.createNewInventory(payload);
    }
    async getAllInventory() {
        return await this.iventoryRepository.getAllDoc();
    }
    async getInventory(id) {
        const res = await this.iventoryRepository.getSingleDoc(id);
        if (!res)
            throw new not_fount_error_1.NotFoundError();
        return res;
    }
    async deleteInventory(id) {
        const res = await this.iventoryRepository.deleteSingleDoc(id);
        if (!res)
            throw new not_fount_error_1.NotFoundError();
        return res;
    }
    async updateInventory(id, payload) {
        const res = await this.iventoryRepository.updateDoc(id, payload);
        if (!res)
            throw new not_fount_error_1.NotFoundError();
        return res;
    }
}
exports.default = InventroryService;
