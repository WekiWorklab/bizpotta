import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import creatorService from "../services/CreatorService";

const initialState = {
  isError: false,
  isLoading: false,
  message: "",
  isUserUpdated: false,
};

// set user
export const onBoardUser = createAsyncThunk("creator/onBoard", async (data, thunkAPI) => {
  try {
    if (data.user_type === 3) {
      console.log("data", data);
      return await creatorService.onBoardMentor(data);
    }
    if (data.user_type === 4) {
      return await creatorService.onBoardTutor(data);
    }
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

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
      });
  },
});

export const { reset } = creatorSlice.actions;
export default creatorSlice.reducer;
