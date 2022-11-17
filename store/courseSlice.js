import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courseCategory: null,
    total_courses: [],
    show_course_modal: false,
    show_profile_modal: false,
    show_upload_modal: false,
    show_upload_success_modal: false,
    show_notes: false,
    show_course_details_modal: false,
    show_masterclass_modal: false,
    weeks_array: [1],
    quiz_array: [],
    quiz_data: [],
    cart_array: [324, 988, 1987],
    course_details: null
  },

  reducers: {
    addCourse: (state, action) => {
      state.total_courses = action.payload;
    },
    removeCourse: (state, action) => {
      state.total_courses = state.total_courses.filter((el) => el !== action.payload);
    },
    showCourseModal: (state, action) => {
      state.show_course_modal = action.payload;
    },
    showProfileModal: (state, action) => {
      state.show_profile_modal = action.payload;
    },
    addCategory: (state, action) => {
      state.courseCategory = action.payload;
    },
    showUploadModal: (state, action) => {
      state.show_upload_modal = action.payload;
    },
    showUploadSuccessModal: (state, action) => {
      state.show_upload_success_modal = action.payload;
    },
    showNotes: (state, action) => {
      state.show_notes = action.payload;
    },
    showCourseDetailsModal: (state, action) => {
      state.show_course_details_modal = action.payload;
    },
    showMasterclassModal: (state, action) => {
      state.show_masterclass_modal = action.payload;
    },
    setCourseDetails: (state, action) =>  {
      state.course_details = action.payload
    },

    setWeeksArray: (state, action) => {
      state.weeks_array = [...state.weeks_array, state.weeks_array.length + 1];
    },

    deleteLastWeek: (state, action) => {
      state.weeks_array = state.weeks_array.slice(0, -1);
    },

    setQuizArray: (state, action) => {
      state.quiz_array = [...state.quiz_array, "x"];
    },

    addToCart: (state, action) => {
      state.cart_array = [...state.cart_array, action.payload]
    },

    removeFromCart: (state, action) => {
      state.cart_array = state.cart_array.filter(el => el != action.payload)
    },

    reset: (state) => {
      state.courseCategory = null;
      state.total_courses = [];
      state.show_course_modal = false;
      state.show_profile_modal = false;
      state.show_upload_modal = false;
      state.show_upload_success_modal = false;
      state.show_notes = false;
      state.show_course_details_modal = false;
    },
  },
});

export const {
  addCourse,
  removeCourse,
  showCourseModal,
  showProfileModal,
  addCategory,
  showUploadModal,
  showUploadSuccessModal,
  showNotes,
  showCourseDetailsModal,
  reset,
  setWeeksArray,
  setQuizArray,
  deleteLastWeek,
  addToCart,
  removeFromCart,
  setCourseDetails,
  showMasterclassModal
} = courseSlice.actions;

export default courseSlice.reducer;
