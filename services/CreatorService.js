import AxoisApi from "../utils/index";
import { APIS } from "../utils/api";
import Cookies from "js-cookie";
import { setCookie, removeCookies } from "cookies-next";

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

const createMentorCourse = async ({ courseTitle, courseSubTitle, courseDescription, industries, image, price, level }) => {
  return AxoisApi.post(`${APIS.MENTORS.CREATE_COURSE}`, {
    title: courseTitle,
    short_description: courseSubTitle,
    description: courseDescription,
    industry_id: industries,
    image: image,
    price: price,
    level: level,
  }).then((res) => {
    return res.data;
  });
};
const createTutorCourse = async ({ courseTitle, courseSubTitle, courseDescription, category_id, subcategory_id, image, price, level }) => {
  return AxoisApi.post(`${APIS.MENTORS.CREATE_COURSE}`, {
    title: courseTitle,
    short_description: courseSubTitle,
    description: courseDescription,
    category_id: category_id,
    subcategory_id: subcategory_id,
    image: image,
    price: price,
    level: level,
  }).then((res) => {
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
};

export default creatorService;
