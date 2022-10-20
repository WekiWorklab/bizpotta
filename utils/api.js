const api = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

export const APIS = {
  AUTH: {
    VERIFY_EMAIL: `${api}/email/verification-notification`,
    VERIFY_CODE: `${api}/verify-email`,
    SIGNUP: `${api}/register`,
    SIGNIN: `${api}/login`,
    FORGOT_PASSWORD: `${api}/forgot-password`,
    RESET_PASSWORD: `${api}/resetPassword`,
    LOGOUT: `${api}/logout`,
    USER: `${api}/user`,
  },
  LEARNERS: {
    SET_LEARNING_PREFERENCES: `${api}/set-learning-preferences`,
    GET_LEARNING_PREFERENCES: `${api}/get-learning-preferences`,
  },
};
