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
    course_week_id: week_id,
  });
};

//The live session api fxns are diffrent from the others above. Was just trying new stuff out i.e no .then() after await fxn
const getLiveSessions = () => {
  // return AxoisApi.get(APIS.LEARNERS.GET_LIVE_SESSIONS).then(res => {
  //   return res.data
  // })
  return AxoisApi.get(APIS.LEARNERS.GET_LIVE_SESSIONS);
};

const getLiveSession = (id) => {
  return AxoisApi.get(APIS.LEARNERS.GET_LIVE_SESSION(id));
};

const setLectureCompleted = (data) => {
  return AxoisApi.post(`${APIS.LEARNERS.SET_LECTURE_COMPLETED}`, {
    course_id: data.course_id,
    course_week_id: data.course_week_id,
  });
};

const setAssignments = (data) => {
  return AxoisApi.post(`${APIS.LEARNERS.SET_ASSIGNMENT_COMPLETED}`, {
    course_student_id: data.course_student_id,
    week_id: data.week_id,
    assignment_file: data.file,
  });
};

const setNote = (data) => {
  return AxoisApi.post(`${APIS.LEARNERS.SET_NOTE}`, {
    course_student_id: data.course_student_id,
    week_id: data.week_id,
    note: data.note,
  });
};

const getNotes = (id) => {
  return AxoisApi.get(APIS.LEARNERS.GET_NOTES(id));
};

const getNote = (id) => {
  return AxoisApi.get(APIS.LEARNERS.GET_NOTE(id));
};

const confUsers = (data) => {
  return AxoisApi.post(`${APIS.LEARNERS.CONF_USERS}`, {
    name: data.name,
    email: data.email,
    city: data.city,
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
  submitAnswers,
  getLiveSessions,
  getLiveSession,
  setLectureCompleted,
  setAssignments,
  setNote,
  getNotes,
  getNote,
  confUsers,
};

export default learnersService;
