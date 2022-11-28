import AxoisApi from "../utils/index";
import { APIS } from "../utils/api";


const getCourses = async() => {
    return AxoisApi.get(`${APIS.LEARNERS.GET_COURSES}`).then(res => res.data)
}

const getCourse = async(id) => {
    return AxoisApi.get(`${APIS.LEARNERS.GET_COURSE(id)}`).then(res => res.data)
}


const getRecommended = async() => {
    return AxoisApi.get(`${APIS.LEARNERS.GET_RECOMMENDED}`).then(res => res.data)
}

const getPopular = async() => {
    return AxoisApi.get(`${APIS.LEARNERS.GET_POPULAR}`).then(res => res.data)
}

const getFeatured = async() => {
    return AxoisApi.get(`${APIS.LEARNERS.GET_FEATURED_COURSES}`).then(res => res.data)
}

const getVCCourses = async(id) => {
    return AxoisApi.get(`${APIS.LEARNERS.GET_VC_COURSES(id)}`).then(res => res.data)
}

const getLatestVcCourses = async() => {
    return AxoisApi.get(APIS.LEARNERS.GET_LATEST_VC_COURSES)
}

const getLatestMcCourses = async() => {
    return AxoisApi.get(APIS.LEARNERS.GET_LATEST_MC_COURSES)
}


const studentService = {
    getCourse,
    getCourses, 
    getRecommended,
    getPopular,
    getFeatured,
    getVCCourses,
    getLatestVcCourses,
    getLatestMcCourses
}

export default studentService