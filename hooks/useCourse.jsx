import useNotification from "./useNotification";
import CreatorService from "../services/CreatorService";

const useTask = () => {
  const { handleError, handleSuccess } = useNotification();

  const handleCreatelecture = (data, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      CreatorService.createLecture(data)
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
    handleCreatelecture,
  };
};

export default useTask;
