import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: "course",
    initialState: {
        total_courses: [],
        show_course_modal : false
    },

    reducers: {
        addCourse: (state, action) => {
            state.total_courses = action.payload
        },
        removeCourse: (state, action) => {
            // state.total_courses.filter(el => el !== action.payload)
            state.total_courses = state.total_courses.filter(el => el !== action.payload)
        },
        showCourseModal: (state, action) => {
            state.show_course_modal = action.payload
        }
    }
})


export const {addCourse, removeCourse, showCourseModal} = courseSlice.actions;

export default courseSlice.reducer