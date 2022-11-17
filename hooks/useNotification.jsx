import { toast } from "react-toastify";

const useNotification = () => {
  const logoutUser = () => {
    localStorage.removeItem("bizpotta_token");
    localStorage.removeItem("user");

    window.location.assign("/");
  };

  const handleSuccess = (message) => {
    toast.success(message);
  };

  const handleError = (error) => {
    if (!error.response) {
      return toast.error("Something went wrong. Please try again later.");
    }

    if (error?.response?.status === 401) {
      toast.error("You are not authorized to perform this action.");
      return logoutUser(true);
    }

    if (error?.response?.status === 500) {
      return toast.error(`${error?.response?.data?.message ?? "An error occured, please try again"} 🤥`);
    }

    if (typeof error?.response?.data?.errors === "object" && error !== null) {
      for (const [, value] of Object?.entries(error?.response?.data?.errors)) {
        toast.error(`${value}`);
      }
    } else {
      toast.error(error?.response?.data?.message ?? "");
    }
  };
  return {
    handleError,
    handleSuccess,
  };
};

export default useNotification;
