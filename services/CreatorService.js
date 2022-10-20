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

const creatorService = {
  onBoardMentor,
  onBoardTutor,
};

export default creatorService;
