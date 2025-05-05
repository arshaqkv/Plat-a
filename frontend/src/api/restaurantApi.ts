import axios from "./axios/axiosInstance";

export const createRestaurant = async (data: {
  name: string;
  address: string;
  contact: string;
}) => {
  const response = await axios.post("/", data);
  return response.data;
};

export const getAllRestaurants = async () => {
  const response = await axios.get("/");
  return response.data;
};

export const editRestaurant = async (
  id: string,
  data: {
    name: string;
    address: string;
    contact: string;
  }
) => {
  const response = await axios.put(`/${id}`, data);
  return response.data;
};

export const deleteRestaurant = async (id: number) => {
  const response = await axios.delete(`/${id}`);
  return response.data;
};

export const getSingleRestaurant = async (id: string) => {
  const response = await axios.get(`/${id}`);
  return response.data;
};
