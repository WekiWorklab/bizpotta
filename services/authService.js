import AxoisApi from "../utils/index";
import { APIS } from "../utils/api";
import Cookies from "js-cookie";
import { setCookie, removeCookies } from "cookies-next";

const verifyEmail = (email, phone) => {
  return AxoisApi.post(`${APIS.AUTH.VERIFY_EMAIL}`, {
    email,
    phone,
  }).then((res) => {
    return res.data;
  });
};

const register = (data) => {
  return AxoisApi.post(`${APIS.AUTH.SIGNUP}`, data).then((res) => {
    console.log(res);
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(res.data.data));
    }
    return res.data;
  });
};

const login = (data) => {
  return AxoisApi.post(`${APIS.AUTH.SIGNIN}`, {
    email: data.email,
    password: data.password,
  }).then((res) => {
    if (res.data.access_token) {
      Cookies.set("bizpotta_token", res.data.access_token);
      setCookie("bizpotta_token", res.data.access_token, {
        path: "/",
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      });
      if (typeof window !== "undefined") {
        localStorage.setItem("bizpotta_token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
    }

    return res.data;
  });
};

const forgotPassword = (email) => {
  return AxoisApi.post(`${APIS.AUTH.FORGOT_PASSWORD}`, {
    email,
  }).then((res) => {
    return res.data;
  });
};

// get user from localstorage or server
const getUser = () => {
  let user = null;
  if (typeof window !== "undefined" && window.localStorage.getItem("user")) {
    user = window.localStorage.getItem("user");
    console.log("local", user);
    if (user != "undefined") {
      return JSON.parse(user);
    }
  }
  return null;
};

// get token for localstorage and cookie
const getToken = () => {
  let token = Cookies.get("bizpotta_token");
  if (typeof window !== "undefined" && window.localStorage.getItem("bizpotta_token")) {
    return token ? token : window.localStorage.getItem("bizpotta_token");
  }
  return token;
};

// get user from server
const getUserFromServer = async () => {
  const token = getToken();
  if (token) {
    const response = await AxoisApi.get(`${APIS.AUTH.USER}`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    console.log("server", response);
    if (response.data) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    }
  }
  return null;
};

const resetPassword = (data) => {
  return AxoisApi.post(`${APIS.AUTH.RESET_PASSWORD}`, data).then((res) => {
    return res.data;
  });
};

const logout = () => {
  const token = getToken();
  if (token) {
    AxoisApi.post(
      `${APIS.AUTH.LOGOUT}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
  }
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
    localStorage.removeItem("bizpotta_token");
    Cookies.remove("bizpotta_token");
    removeCookies("bizpotta_token");
  }
  return;
};

const authService = {
  verifyEmail,
  register,
  login,
  forgotPassword,
  getUser,
  getUserFromServer,
  getToken,
  resetPassword,
  logout,
};

export default authService;
