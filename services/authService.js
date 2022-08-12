import axios from "axios";

const API_URL = "https://127.0.0.1/api/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

// Get user data
const getUser = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

// get token for localstorage and cookie
const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : null;
  }
  return null;
};

const authService = {
  register,
  logout,
  login,
  getUser,
  getToken,
};

export default authService;
