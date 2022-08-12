import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/api/register`, userData);
  console.log(response);
  if (response.data) {
    Cookies.set("bizpotta_token", response.data.access_token);
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

// get token for localstorage and cookie
const getToken = () => {
  let token = Cookies.get("bizpotta_token");
  return token ? token : null;
};

const authService = {
  register,
  logout,
  login,
  getToken,
};

export default authService;
