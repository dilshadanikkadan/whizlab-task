import express from "express";
import { validateRequest } from "../../../lib/middlewares/validate.request";
import inventroryController from "./controller";
import { inventoryValidation } from "../../../lib/validation/inventroy.validation";
const router = express.Router();

router.get("/", inventroryController.getAllInentory);

router.get("/:id", inventroryController.getInventory);

router.post(
  "/",
  inventoryValidation,
  validateRequest,
  inventroryController.buildInventory
);

router.put("/:id", inventroryController.updateInventory);

router.delete("/:id", inventroryController.deleteInventory);

export default router;
