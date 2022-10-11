import AxoisApi from "../utils/index";
import { APIS } from "../utils/api";
import Cookies from "js-cookie";
import { setCookie, removeCookies } from "cookies-next";

export const setLearningPreferences = async (data) => {
  try {
    const response = await AxoisApi.post(APIS.LEARNERS.SET_LEARNING_PREFERENCES, {
      category_id: data.category_id,
      sub_category_id: data.sub_category_id,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getLearningPreferences = async () => {
  try {
    const response = await AxoisApi.get(APIS.LEARNERS.GET_LEARNING_PREFERENCES);
    return response;
  } catch (error) {
    return error;
  }
};
