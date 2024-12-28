import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { categories, IFormData } from "../../../utils/constnants";
import { postRequest, putRequest } from "../../../lib/axios/axios";

type Props = {
  setIsModalOpen: (isOpen: boolean) => void;
  setUpdateMode: (isOpen: boolean) => void;
  handleSuccess: () => void;
  updateMode: boolean;
  currentSelectedItem?: IFormData | null;
  setCurrentSlectedItem?: any
};

const initialState: IFormData = {
  itemName: "",
  price: 0,
  quantity: 0,
  category: categories[0],
  description: "",
};

const InventoryForm = ({
  setIsModalOpen,
  handleSuccess,
  currentSelectedItem,
  updateMode,
  setCurrentSlectedItem,
  setUpdateMode
}: Props) => {
  const [formError, setFormError] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData>(initialState);

  useEffect(() => {
    if (updateMode && currentSelectedItem) {
      setFormData(currentSelectedItem);
    }
  }, [updateMode, currentSelectedItem]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormError("");
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    }));
  };

  const validateForm = (): boolean => {
    // Check for empty fields
    const emptyField = Object.entries(formData).find(([_, value]) => 
      value === "" || (typeof value === "number" && isNaN(value))
    );
    
    if (emptyField) {
      setFormError(`${emptyField[0]} cannot be empty`);
      return false;
    }

    if (formData.price <=0 || formData.quantity <=0) {
      setFormError("Price and quantity cannot be negative or zero");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      setLoading(true);
      setFormError("");
      
      const response = updateMode 
        ? await putRequest(`/inventory/${currentSelectedItem?._id}`, formData)
        : await postRequest("/inventory", formData);

      if (response?.status === (updateMode ? 200 : 201)) {
        setCurrentSlectedItem(null)
        setUpdateMode(false)
        setSuccessMsg(`Successfully ${updateMode ? 'updated' : 'created'}`);
        handleSuccess();
        setTimeout(() => {
          setIsModalOpen(false);
        }, 1000);
      } else {
        setFormError("Something went wrong");
      }
    } catch (error) {
      setFormError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button 
          onClick={() =>{
            setIsModalOpen(false)
            setUpdateMode(false)
            setCurrentSlectedItem(null)
          }}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-[#49495B] mb-4">
          {updateMode ? "Update Item" : "Add New Inventory Item"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {formError && <p className="text-red-500 text-sm">{formError}</p>}
          {successMsg && <p className="text-green-500 text-sm">{successMsg}</p>}

          <div>
            <label className="block text-[#49495B] font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="w-full border-2 border-[#F4F5FA] rounded-lg p-2 focus:outline-none focus:border-[#CA5C67]"
              placeholder="Enter item name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#49495B] font-medium mb-1">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border-2 border-[#F4F5FA] rounded-lg p-2 focus:outline-none focus:border-[#CA5C67]"
                placeholder="0"
                required
              />
            </div>
            <div>
              <label className="block text-[#49495B] font-medium mb-1">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border-2 border-[#F4F5FA] rounded-lg p-2 focus:outline-none focus:border-[#CA5C67]"
                placeholder="₹0.00"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#49495B] font-medium mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border-2 border-[#F4F5FA] rounded-lg p-2 focus:outline-none focus:border-[#CA5C67]"
            >
              {categories.map((category) => (
                <option key={category.toLowerCase()} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[#49495B] font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border-2 border-[#F4F5FA] rounded-lg p-2 focus:outline-none focus:border-[#CA5C67]"
              placeholder="Enter item description"
              rows={3}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#CA5C67] text-white py-2 rounded-lg hover:bg-[#b85058] transition-colors duration-200 disabled:opacity-50"
          >
            {loading 
              ? "Loading..." 
              : updateMode 
                ? "Update Item" 
                : "Add Item"
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default InventoryForm;