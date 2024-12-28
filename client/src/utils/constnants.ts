export const categories = [
  "Electronics",
  "Furniture",
  "Office Supplies",
  "Accessories",
  "Others",
];

export interface IFormData {
  itemName: string;
  price: number;
  description: string;
  quantity: number;
  category: string;
  _id?:any
}
