import { Schema, model } from "mongoose";

interface InventoryEntity {
  itemName: string;
  price: number;
  description: string;
  quanitiy: string;
  category: string;
}

const inventorySchema = new Schema(
  {
    itemName: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const InventoryModel = model<InventoryEntity>("inventory", inventorySchema);
