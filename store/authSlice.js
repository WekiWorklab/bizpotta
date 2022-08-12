import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// get user and token for localstorage and cookie
const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  isAuthenticated: false,
  user: {},
  token: "",
  isLoading: false,
  message: "",
  isError: false,
};
