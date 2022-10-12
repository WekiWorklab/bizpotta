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

const learnersService = {
  getLearningPreferences,
  setLearnersPreferences,
};

export default learnersService;
