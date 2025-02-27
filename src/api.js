import axios from "axios";

const BASE_URL = "https://kerala-bus.onrender.com/api/owner";

const api = axios.create({
  baseURL: BASE_URL,
});


export const register = async (data) => {
  return await api.post("/register", data);
};


export const login = async (data) => {
  return await api.post("/login", data);
};


export const addBus = async (data, token) => {
  return await api.post("/add-bus", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};


export const getBusDetails = async (busId, token) => {
  return await api.get(`/get-bus/${busId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default api;
