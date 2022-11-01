import AxoisApi from "../utils/index";
import { APIS } from "../utils/api";

const setLearnersPreferences = (data) => {
  return AxoisApi.post(`${APIS.LEARNERS.SET_LEARNING_PREFERENCES}`, {
    category_id: data.category_id,
    sub_category: data.sub_category_id,
  }).then((res) => {
    return res.data;
  });
};

const getLearningPreferences = () => {
  return AxoisApi.get(APIS.LEARNERS.GET_LEARNING_PREFERENCES).then((res) => {
    return res.data;
  });
};

const purchaseCourse = async (data) => {
  return AxoisApi.post(`${APIS.LEARNERS.PURCHASE_COURSE}`, data).then((res) => {
    return res.data;
  });
};

const purchasedCourse = async (data) => {
  return AxoisApi.post(`${APIS.LEARNERS.COURSE_PURCHASED}`, data).then((res) => {
    return res.data;
  });
};

const purchaseCourseFailed = async (data) => {
  return AxoisApi.post(`${APIS.LEARNERS.COURSE_PURCHASE_FAILED}`, data).then((res) => {
    return res.data;
  });
};

const getMyCourses = () => {
  return AxoisApi.get(APIS.LEARNERS.GET_MY_COURSES).then((res) => {
    return res.data;
  });
};

const getMyCourse = (id) => {
  return AxoisApi.get(APIS.LEARNERS.GET_MY_COURSE(id)).then((res) => {
    return res.data;
  });
};

const learnersService = {
  getLearningPreferences,
  setLearnersPreferences,
  purchaseCourse,
  purchasedCourse,
  purchaseCourseFailed,
  getMyCourses,
  getMyCourse,
};

export default learnersService;
