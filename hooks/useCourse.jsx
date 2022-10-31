import useNotification from "./useNotification";
import CreatorService from "../services/CreatorService";
import learnersService from "../services/LearnersService";

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

  const purchaseCourse = (data, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      learnersService
        .purchaseCourse(data)
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
    purchaseCourse,
  };
};

export default useTask;
