import AxoisApi from "../utils/index";
import { APIS } from "../utils/api";
import Cookies from "js-cookie";
import { setCookie, removeCookies } from "cookies-next";

const onBoardMentor = (user_id, work) => {
  return AxoisApi.post(`${APIS.AUTH.VERIFY_EMAIL}`, {
    email,
    phone,
  }).then((res) => {
    return res.data;
  });
};
const onBoardTutor = (email, phone) => {
  return AxoisApi.post(`${APIS.AUTH.VERIFY_EMAIL}`, {
    email,
    phone,
  }).then((res) => {
    return res.data;
  });
};

const creatorService = {
  onBoardMentor,
  onBoardTutor,
};

export default creatorService;
