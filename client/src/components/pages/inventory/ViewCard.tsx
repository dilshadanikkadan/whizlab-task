import { X } from "lucide-react";
import React from "react";
import { IFormData } from "../../../utils/constnants";

type Props = {
  setIsModalOpen: (isOpen: boolean) => void;
  item?: IFormData | null;
};

const InventoryViewModal = ({ setIsModalOpen, item }: Props) => {
  return (
    <main className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button 
          onClick={() => setIsModalOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-[#49495B] mb-4">
          Item Details
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-[#49495B] font-medium mb-1">
              Name
            </label>
            <p className="text-gray-700 border-2 border-[#F4F5FA] rounded-lg p-2">
              {item?.itemName}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#49495B] font-medium mb-1">
                Quantity
              </label>
              <p className="text-gray-700 border-2 border-[#F4F5FA] rounded-lg p-2">
                {item?.quantity}
              </p>
            </div>
            <div>
              <label className="block text-[#49495B] font-medium mb-1">
                Price
              </label>
              <p className="text-gray-700 border-2 border-[#F4F5FA] rounded-lg p-2">
                ₹{item?.price.toFixed(2)}
              </p>
            </div>
          </div>

          <div>
            <label className="block text-[#49495B] font-medium mb-1">
              Category
            </label>
            <p className="text-gray-700 border-2 border-[#F4F5FA] rounded-lg p-2 capitalize">
              {item?.category}
            </p>
          </div>

          <div>
            <label className="block text-[#49495B] font-medium mb-1">
              Description
            </label>
            <p className="text-gray-700 border-2 border-[#F4F5FA] rounded-lg p-2 min-h-[4.5rem]">
              {item?.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InventoryViewModal;