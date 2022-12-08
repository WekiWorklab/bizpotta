import useNotification from "./useNotification";
import CreatorService from "../services/CreatorService";
import adminService from "../services/AdminService";

const useLiveSession = () => {
  const { handleError, handleSuccess } = useNotification();

  const handleCreateLiveSession = (data, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      CreatorService.createLiveSession(data)
        .then((res) => {
          handleSuccess(res?.message);
          resolve(res?.data);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setShowLoader(false);
        });
    });
  };

  const handleGetLiveSessions = () => {
    return new Promise((resolve) => {
      CreatorService.getLiveSessions()
        .then((res) => {
          resolve(res?.liveSessions);
        })
        .catch((error) => {
          handleError(error);
        });
    });
  };

  const handleGetLiveSession = (id, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      CreatorService.getLiveSession(id)
        .then((res) => {
          resolve(res?.data);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setShowLoader(false);
        });
    });
  };



  const getAllRequests = () => {
    return new Promise((resolve, reject) => {
      adminService.getAllRequests().then((res) => resolve(res.data)).catch(err => reject(err))
    })
  }


  return {
    handleCreateLiveSession,
    handleGetLiveSessions,
    handleGetLiveSession,
    getAllRequests,
  };
};

export default useLiveSession;
