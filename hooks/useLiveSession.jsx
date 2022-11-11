import useNotification from "./useNotification";
import CreatorService from "../services/CreatorService";

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

  return {
    handleCreateLiveSession,
    handleGetLiveSessions,
    handleGetLiveSession,
  };
};

export default useLiveSession;
