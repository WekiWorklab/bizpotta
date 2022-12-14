import AxoisApi from "../utils/index";
import { APIS } from "../utils/api";

const onBoardMentor = ({ user_type, industry, work_type, jobDesc }) => {
  return AxoisApi.post(`${APIS.MENTORS.SET_MENTORING_PREFERENCES}`, {
    user_type: user_type,
    company: work_type,
    industry_id: industry,
    job_description: jobDesc,
  }).then((res) => {
    return res.data;
  });
};

const onBoardTutor = ({ user_type, industry, work_type, jobDesc }) => {
  return AxoisApi.post(`${APIS.TUTORS.SET_TUTORING_PREFERENCES}`, {
    user_type: user_type,
    company: work_type,
    category_id: industry,
    subcategory_id: jobDesc,
  }).then((res) => {
    return res.data;
  });
};
const addCompnay = ({ name, jobDescription, category_id }) => {
  return AxoisApi.post(`${APIS.TUTORS.ADD_COMPANY}`, {
    name,
    jobDescription,
    category_id,
  }).then((res) => {
    return res.data;
  });
};

const getCourses = async () => {
  return AxoisApi.get(`${APIS.TUTORS.GET_COURSES}`).then((res) => {
    return res.data;
  });
};

const createMentorCourse = async (data) => {
  return AxoisApi.post(`${APIS.MENTORS.CREATE_COURSE}`, data).then((res) => {
    return res.data;
  });
};

const createTutorCourse = async (data) => {
  return AxoisApi.post(`${APIS.TUTORS.CREATE_COURSE}`, data).then((res) => {
    console.log(res);
    return res.data;
  });
};
const getCourse = async (id) => {
  return AxoisApi.get(`${APIS.TUTORS.GET_COURSE(id)}`).then((res) => {
    return res.data;
  });
};
const createLecture = async (data) => {
  return AxoisApi.post(`${APIS.TUTORS.CREATE_LECTURE}`, data).then((res) => {
    return res.data;
  });
};

const createResource = async (data) => {
  return AxoisApi.post(`${APIS.TUTORS.CREATE_RESOURCE}`, data).then((res) => {
    return res.data;
  });
};
const createQuiz = async (data) => {
  return AxoisApi.post(`${APIS.TUTORS.CREATE_QUIZ}`, data).then((res) => {
    return res.data;
  });
};
const createAssignment = async (data) => {
  return AxoisApi.post(`${APIS.TUTORS.CREATE_ASSIGNMENT}`, data).then((res) => {
    return res.data;
  });
};
const saveCourse = async (data) => {
  return AxoisApi.post(`${APIS.TUTORS.SAVE_COURSE}`, {
    course_id: data,
  }).then((res) => {
    return res.data;
  });
};
const createLiveSession = async (data) => {
  return AxoisApi.post(`${APIS.MENTORS.CREATE_LIVE_SESSION}`, data).then((res) => {
    return res.data;
  });
};

const getLiveSessions = async () => {
  return AxoisApi.get(`${APIS.MENTORS.GET_LIVE_SESSIONS}`).then((res) => {
    return res.data;
  });
};

const getLiveSession = async (id) => {
  return AxoisApi.get(`${APIS.MENTORS.GET_LIVE_SESSION(id)}`).then((res) => {
    return res.data;
  });
};

const creatorService = {
  onBoardMentor,
  onBoardTutor,
  addCompnay,
  getCourses,
  createMentorCourse,
  createTutorCourse,
  getCourse,
  createLecture,
  createResource,
  createQuiz,
  createAssignment,
  saveCourse,
  createLiveSession,
  getLiveSessions,
  getLiveSession,
};

export default creatorService;
