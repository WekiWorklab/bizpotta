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

  return {
    handleCreateLiveSession,
  };
};

export default useLiveSession;
