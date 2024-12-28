import { X } from "lucide-react";
import React from "react";
import { deleterequest } from "../../lib/axios/axios";

type Props = {
  setIsDeleteModalOpen: (isOpen: boolean) => void;
  itemName?: string;
  currentSelectedItemId: any;
  handleDeleteSuccess: any;
};

const DeleteModal = ({
  setIsDeleteModalOpen,
  itemName = "this item",
  currentSelectedItemId,
  handleDeleteSuccess,
}: Props) => {
  const handleDelete = async () => {
    console.log("object id is", currentSelectedItemId);
    // return;
    try {
      const res = await deleterequest("/inventory", currentSelectedItemId);
      setIsDeleteModalOpen(false);
      handleDeleteSuccess()
    } catch (error) {}
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm relative">
        <button
          onClick={() => setIsDeleteModalOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-[#49495B] mb-3">Delete Item</h2>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete {itemName}? This action cannot be
          undone.
        </p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-[#CA5C67] text-white rounded-lg hover:bg-[#b85058] transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
