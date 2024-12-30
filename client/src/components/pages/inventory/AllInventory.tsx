import { useContext, useEffect, useState } from "react";
import InventoryCard from "./InventoryCard";
import InventoryForm from "./InventoryForm";
import DeleteModal from "../../modal/DeleteModal";
import Button from "../../ui/Button";
import { IFormData } from "../../../utils/constnants";
import { context } from "../../../store/StoreProvider";
import Loading from "../../loader/Loading";
import InventoryViewModal from "./ViewCard";
import { useNavigate } from "react-router-dom";
const AllInventory = () => {
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);
  const [currentSelectedItem, setCurrentSlectedItem] =
    useState<IFormData | null>(null);
  const { inventories, fetchData, loading } = useContext(context);
  const [updateMode, setUpdateMode] = useState<boolean>(false);
  
  useEffect(() => {
    fetchData();
  }, []);
  const handleSuccess = () => {
    fetchData();
  };

  return (
    <main className="">
      <div className="btn  w-[90%] mx-auto  mt-5 flex justify-end md:justify-between ">
        
        <Button
          onClick={() => navigate('/')}
          className="text-white  hidden md:block bg-[#CA5C67] rounded-md py-1.5 px-3 "
        >
          Back To Home
        </Button>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="text-white  bg-[#CA5C67] rounded-md py-1.5 px-3 "
        >
          Add newInventory
        </Button>
        
      </div>
      {
        isViewModalOpen &&
        <InventoryViewModal item={currentSelectedItem} setIsModalOpen={setIsViewModalOpen}/>
      }
      {isModalOpen && (
        <InventoryForm
          updateMode={updateMode}
          handleSuccess={handleSuccess}
          setIsModalOpen={setIsModalOpen}
          currentSelectedItem={currentSelectedItem}
          setCurrentSlectedItem={setCurrentSlectedItem}
          setUpdateMode={setUpdateMode}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          handleDeleteSuccess={handleSuccess}
          currentSelectedItemId={currentSelectedItem?._id}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      )}
      {loading ? (
        <Loading />
      ) : (
        <div className="w-[90%] mx-auto flex flex-wrap mt-5 gap-10">
          {inventories?.map((item: IFormData | any, i: number) => (
            <InventoryCard
              setCurrentSlectedItem={setCurrentSlectedItem}
              item={item}
              index={i}
              setIsDeleteModalOpen={setIsDeleteModalOpen}
              setUpdateMode={setUpdateMode}
              setIsModalOpen={setIsModalOpen}
              setIsViewModalOpen={setIsViewModalOpen}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default AllInventory;
