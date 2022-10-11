import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLearningPreferences, setLearnersPreferences } from "../services/LearnersService";

// Set User Preference
export const setLearningPreferences = createAsyncThunk("learners/setLearningPreferences", async (data, thunkAPI) => {
  try {
    return await setLearnersPreferences(data);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const learnersSlice = createSlice({
  name: "learners",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    learningPreferences: getLearningPreferences() || [],
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLearningPreferences.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setLearningPreferences.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.learningPreferences = action.payload.data;
      })
      .addCase(setLearningPreferences.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = learnersSlice.actions;
export default learnersSlice.reducer;
