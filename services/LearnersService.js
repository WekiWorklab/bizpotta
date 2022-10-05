import AxoisApi from "../utils/index";
import { APIS } from "../utils/api";
import Cookies from "js-cookie";
import { setCookie, removeCookies } from "cookies-next";

export const setLearningPreferences = async (data) => {
  try {
    const response = await AxoisApi.post(APIS.LEARNERS.SET_LEARNING_PREFERENCES, data);
    return response;
  } catch (error) {
    return error;
  }
};
