import React from "react";
import { MonitorSmartphone, Eye, Pencil, Trash2 } from "lucide-react";
import Button from "../../ui/Button";
import { IFormData } from "../../../utils/constnants";
type Props = {
  setIsDeleteModalOpen: (isOpen: boolean) => void;
  setIsModalOpen: (isOpen: boolean) => void;
  setIsViewModalOpen: (isOpen: boolean) => void;
  item: IFormData;
  index: number;
  setCurrentSlectedItem: (currentSelectedItem: IFormData) => void;
  setUpdateMode: (updateMode: boolean) => void;
};
const InventoryCard = ({
  setIsDeleteModalOpen,
  item,
  index,
  setCurrentSlectedItem,
  setUpdateMode,
  setIsModalOpen,
  setIsViewModalOpen
}: Props) => {
  return (
    <div key={index} className="w-full md:w-64 bg-white rounded-lg p-6 overflow-hidden">
      <div className="flex items-start space-x-4">
        <div className="bg-[#F4F5FA] p-3 rounded-lg border-2 border-gray-200">
          <MonitorSmartphone size={24} className="text-primary" />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-[#49495B]">{item.itemName}</h3>
            <span className="text-primary font-bold">Qty: {item.quantity}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-baseline justify-between">
          <span className="text-xl font-bold text-primary">₹ {item.price}</span>
        </div>

        <p className="text-[#b1b1b4] font-bold line-clamp-2">{item.description}</p>
      </div>

      <div className="mt-4 flex gap-2 justify-end">
        <Button onClick={()=> {
          setIsViewModalOpen(true)
          setCurrentSlectedItem(item)
        }} className="p-2 bg-[#F4F5FA] text-primary rounded-lg hover:bg-[#e8e9f1] transition-colors duration-200">
          <Eye size={18} />
        </Button>
        <Button
          onClick={() => {
            setUpdateMode(true);
            setCurrentSlectedItem(item);
            setIsModalOpen(true)
          }}
          className="p-2 bg-[#F4F5FA] text-primary rounded-lg hover:bg-[#e8e9f1] transition-colors duration-200"
        >
          <Pencil size={18} />
        </Button>
        <Button
          onClick={() => {
            setIsDeleteModalOpen(true);
            setCurrentSlectedItem(item);
          }}
          className="p-2 bg-[#F4F5FA] text-primary rounded-lg hover:bg-[#e8e9f1] transition-colors duration-200"
        >
          <Trash2 size={18} />
        </Button>
      </div>
    </div>
  );
};

export default InventoryCard;
