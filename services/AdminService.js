import AxoisApi from "../utils/index";
import { APIS } from "../utils/api";


const getAllRequests = () => {
    return AxoisApi.get(APIS.ADMIN.GET_ALL_REQUESTS)
}


const adminService = {
    getAllRequests,
}

export default adminService