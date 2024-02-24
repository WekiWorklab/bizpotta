import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import creatorService from "../services/CreatorService";

const initialState = {
  isError: false,
  isLoading: false,
  message: "",
  isUserUpdated: false,
};

// set user
export const onBoardUser = createAsyncThunk(
  "creator/onBoard",
  async (data, thunkAPI) => {
    try {
      return await creatorService.onBoardTutor(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addCompnay = createAsyncThunk(
  "creator/addCompnay",
  async (data, thunkAPI) => {
    try {
      return await creatorService.addCompnay(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createMentorCourse = createAsyncThunk(
  "creator/createMentorCourse",
  async (data, thunkAPI) => {
    try {
      return await creatorService.createMentorCourse(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const createTutorCourse = createAsyncThunk(
  "creator/createTutorCourse",
  async (data, thunkAPI) => {
    try {
      return await creatorService.createTutorCourse(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const creatorSlice = createSlice({
  name: "creatorData",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.message = "";
      state.isUserUpdated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onBoardUser.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(onBoardUser.fulfilled, (state, { payload }) => {
        state.isError = false;
        state.isLoading = false;
        state.message = payload.message;
        state.isUserUpdated = true;
      })
      .addCase(onBoardUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isUserUpdated = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(addCompnay.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(addCompnay.fulfilled, (state, { payload }) => {
        state.isError = false;
        state.isLoading = false;
        state.message = payload.message;
        state.isSuccess = true;
        state.isUserUpdated = true;
        state.isUserUpdated = true;
      })
      .addCase(addCompnay.rejected, (state, { payload }) => {
        state.isError = true;
        state.message = payload;
      })
      .addCase(createMentorCourse.rejected, (state, { payload }) => {
        state.isError = true;
        state.message = payload;
      })
      .addCase(createMentorCourse.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(createMentorCourse.fulfilled, (state, { payload }) => {
        state.isError = false;
        state.isLoading = false;
        state.message = payload.message;
        state.isSuccess = true;
        state.courseID = payload.data.id;
      })
      .addCase(createTutorCourse.rejected, (state, { payload }) => {
        state.isError = true;
        state.message = payload;
      })
      .addCase(createTutorCourse.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(createTutorCourse.fulfilled, (state, { payload }) => {
        state.isError = false;
        state.isLoading = false;
        state.message = payload.message;
        state.isSuccess = true;
        state.courseID = payload.data.id;
      });
  },
});

export const { reset } = creatorSlice.actions;
export default creatorSlice.reducer;
