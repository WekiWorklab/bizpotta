import AxoisApi from "../utils/index";
import { APIS } from "../utils/api";

export const getCourseCategories = async () => {
  try {
    const response = await AxoisApi.get(APIS.GET_COURSE_CATEGORIES);
    return response;
  } catch (error) {
    return error;
  }
};

export const getCourseSubCategories = async (id) => {
  try {
    const response = await AxoisApi.get(APIS.GET_COURSE_SUB_CATEGORIES + id);
    return response;
  } catch (error) {
    return error;
  }
};
