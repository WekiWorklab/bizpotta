import AxoisApi from "../utils/index";
import { APIS } from "../utils/api";


const getCourses = async() => {
    return AxoisApi.get(`${APIS.LEARNERS.GET_COURSES}`).then(res => res.data)
}

const getCourse = async(id) => {
    return AxoisApi.get(`${APIS.LEARNERS.GET_COURSE(id)}`).then(res => res.data)
}

const studentService = {
    getCourse,
    getCourses
}

export default studentService