import { useContext } from "react";
// import { forgotPassword, resetPassword } from "../services/auth/auth";
import useNotification from "./useNotification";

const useAuth = () => {
  const { handleError, handleSuccess } = useNotification();

  // const handleForgotPassword = (email) => {
  //   return new Promise((resolve) => {
  //     forgotPassword(email)
  //       .then((res) => {
  //         resolve(res);
  //       })
  //       .catch((error) => {
  //         handleError(error);
  //       });
  //   });
  // };

  // const handleResetPassword = (data) => {
  //   return new Promise((resolve) => {
  //     resetPassword(data)
  //       .then((res) => {
  //         handleSuccess(res?.data?.message);
  //         resolve(res);
  //       })
  //       .catch((error) => {
  //         handleError(error);
  //       });
  //   });
  // };

  // return {
  //   handleForgotPassword,
  //   handleResetPassword,
  // };
};

export default useAuth;
