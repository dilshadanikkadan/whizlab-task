import { createContext, ReactNode, useEffect, useState } from "react";
import useRequest from "../hooks/useRquest";

interface Inventory {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
    description: string;
  }
  
  interface ContextValue {
    inventories: Inventory[];
    loading: boolean;
    fetchData: () => Promise<void>;
  }
  
  export const context = createContext<ContextValue>({
    inventories: [],
    loading: false,
    fetchData: async () => {},
  });
  
  const StoreProvider = ({ children }: { children: ReactNode }) => {
    const { data, loading, fetchData } = useRequest("/inventory");
    const [inventory, setInventory] = useState<Inventory[]>([]); 
  
    useEffect(() => {
      fetchData();
    }, []);
  
    useEffect(() => {
      if (data) {
        setInventory(data);
      }
    }, [data]);
  
    const contextValue: ContextValue = {
      inventories: inventory || data || [],
      loading,
      fetchData
    };
  
    return (
      <context.Provider value={contextValue}>
        {children}
      </context.Provider>
    );
  };
  
  export default StoreProvider;