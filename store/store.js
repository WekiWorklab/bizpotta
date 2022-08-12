import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
  });

export const wrapper = createWrapper(makeStore, { debug: true });
