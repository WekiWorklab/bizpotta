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
  },
  MENTORS: {
    SET_MENTORING_PREFERENCES: `${api}/creators/set-mentor-preferences`,
    CREATE_MENTORING_SESSION: `${api}/creators/create-mentoring-session`,
    CREATE_COURSE: `${api}/creators/mentor/create-courses`,
  },
  TUTORS: {
    SET_TUTORING_PREFERENCES: `${api}/creators/set-tutor-preferences`,
    ADD_COMPANY: `${api}/creators/add-company`,
    GET_COURSES: `${api}/creators/get-courses`,
    CREATE_COURSE: `${api}/creators/tutor/create-courses`,
    GET_COURSE: (id) => `${api}/creators/get-course/${id}`,
  },
  COMPANIES: {
    SET_COMPANY_PREFERENCES: `${api}/creators/set-institue-preferences`,
  },
};
