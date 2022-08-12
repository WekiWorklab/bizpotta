import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/api/register`, userData);
  console.log(response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
    localStorage.setItem("token", response.data.access.token);
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
    const user = localStorage.getItem("bizpotta_user");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

// get token for localstorage and cookie
const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("bizpotta_token");
    return token ? token : null;
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
