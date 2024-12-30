"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_request_1 = require("../../../lib/middlewares/validate.request");
const controller_1 = __importDefault(require("./controller"));
const inventroy_validation_1 = require("../../../lib/validation/inventroy.validation");
const router = express_1.default.Router();
router.get("/", controller_1.default.getAllInentory);
router.get("/:id", controller_1.default.getInventory);
router.post("/", inventroy_validation_1.inventoryValidation, validate_request_1.validateRequest, controller_1.default.buildInventory);
router.put("/:id", controller_1.default.updateInventory);
router.delete("/:id", controller_1.default.deleteInventory);
exports.default = router;
