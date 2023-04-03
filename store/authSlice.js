import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

// get user and token for localstorage and cookie
const token = authService.getToken();
const user = authService.getUser();

const initialState = {
  user: user == null || user == "undefined" ? null : user,
  isAuthenticated: token ? true : user ? true : false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  isRegistered: false,
  token: token ? token : null,
  userUpdatedFromServer: false,
};

// set user
export const setUser = createAsyncThunk(
  "auth/setUser",
  async (data, thunkAPI) => {
    try {
      return await authService.getUserFromServer();
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

// Register user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
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

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Send  Email verification code
export const sendVerificationCode = createAsyncThunk(
  "auth/sendVerificationCode",
  async (thunkAPI) => {
    try {
      return await authService.sendVerificationCode();
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

// Send  Email verification code
export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (passcode, thunkAPI) => {
    try {
      return await authService.VerifyCode(passcode);
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

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.isRegistered = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(verifyEmail.fulfilled, (state, { payload }) => {
        state.isError = false;
        state.isEmailVerified = true;
        state.isLoading = false;
        state.message = payload.message;
      })
      .addCase(verifyEmail.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(sendVerificationCode.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(sendVerificationCode.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = payload.message;
      })
      .addCase(sendVerificationCode.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(setUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRegistered = false;
        state.userUpdatedFromServer = true;
      })
      .addCase(setUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload.access_token;
        state.isAuthenticated = true;
        state.isRegistered = true;
        state.user = action.payload.data;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload.access_token;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
