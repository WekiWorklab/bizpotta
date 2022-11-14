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


const submitAnswers = (data, course_id, week_id) => {
  return AxoisApi.post(`${APIS.LEARNERS.SUBMIT_ANSWERS}`, {
    data: data,
    course_id: course_id,
    course_week_id: week_id
  })
}


const getLiveSessions = () => {
  // return AxoisApi.get(APIS.LEARNERS.GET_LIVE_SESSIONS).then(res => {
  //   return res.data
  // })
  return AxoisApi.get(APIS.LEARNERS.GET_LIVE_SESSIONS)
}

const getLiveSession = (id) => {
  return AxoisApi.get(APIS.LEARNERS.GET_LIVE_SESSION(id))
}

const learnersService = {
  getLearningPreferences,
  setLearnersPreferences,
  purchaseCourse,
  purchasedCourse,
  purchaseCourseFailed,
  getMyCourses,
  getMyCourse,
  submitAnswers,
  getLiveSessions,
  getLiveSession
};

export default learnersService;
