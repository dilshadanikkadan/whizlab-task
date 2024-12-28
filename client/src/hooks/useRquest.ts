import { useState, useCallback } from "react";
import { getRequest } from "../lib/axios/axios";

const useRequest = (endpoint: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<String | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getRequest(endpoint);
      setData(response?.data);
      
      setError(null);
    } catch (err) {
      setError("Something went wrong.. ):");
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  return { data, error, loading, fetchData };
};

export default useRequest;