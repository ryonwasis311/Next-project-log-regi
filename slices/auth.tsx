import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "@/services/auth.service";

const user = JSON.parse(localStorage.getItem("user") || "");

export interface PersonData {
  username: string;
  email: string;
  password: string;
  img: any;
}

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password, img }: PersonData, thunkAPI) => {
    try {
      const response = await AuthService.register(
        username,
        email,
        password,
        img
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: PersonData, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password);    
      return { user: response.data };
    } catch (error: any) {
      console.log("async error");
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

export interface IUsersList {
  isLoggedIn: boolean;
  user: PersonData;
}

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.rejected, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoggedIn = false;
      });
    builder
      .addCase(login.rejected, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
  },
});

const { reducer } = authSlice;

export default reducer;
