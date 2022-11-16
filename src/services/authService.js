import axios from "../config/axios";

const axiosInstance = axios.initiate();

const login = async (payload) => {
  const res = await axiosInstance.post("/login", payload);
  return res.data;
};

const register = async (payload) => {
  const res = await axiosInstance.post("/register", payload);
  return res.data;
};

const logout = async () => {
  const res = await axiosInstance.post("/logout");
  return res.data;
};

export const authService = {
  login,
  register,
  logout,
};
