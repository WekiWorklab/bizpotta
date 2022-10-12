import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { createWrapper } from "next-redux-wrapper";
import courseReducer from "./courseSlice";
import learnersReducer from "./learnersSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      course: courseReducer,
      learners: learnersReducer,
    },
  });

export const wrapper = createWrapper(makeStore, { debug: true });
