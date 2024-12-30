import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://whizlab-task-5tkc.vercel.app",
  withCredentials: true,
});

export const getRequest = (url: string, params?: string) => {
  return axiosInstance.get(url, { params });
};

export const deleterequest = (url: string, id:string) => {
  return axiosInstance.delete(`${url}/${id}`);
};

export const postRequest = (url: string, params?: any) => {
  try {
    return axiosInstance.post(url, params);
  } catch (error) {
    console.log(error);
  }
};

export const putRequest = (url: string, params?: any) => {
  try {
    return axiosInstance.put(url, params);
  } catch (error) {
    console.log(error);
  }
};
