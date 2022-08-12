import axios from "axios";
import Cookies from "js-cookie";
import { setCookie } from "cookies-next";

const API_URL = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/api/register`, userData);
  console.log(response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
    Cookies.set("bizpotta_token", response.data.access_token);
    setCookie("bizpotta_token", response.data.access_token, {
      path: "/",
      httpOnly: process.env.NODE_ENV === "production",
      secure: process.env.NODE_ENV === "production",
    });
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data.user;
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

// get user from localstorage or server
const getUser = async () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  } else {
    user = await getUserFromServer();
  }
  return user;
};

// get user from server
const getUserFromServer = async () => {
  const token = getToken();
  if (token) {
    const response = await axios.get(API_URL + "/api/user", {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  }
  return null;
};
const authService = {
  register,
  logout,
  login,
  getToken,
  getUser,
};

export default authService;
