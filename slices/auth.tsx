import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "@/services/auth.service";
import { error } from "@material-tailwind/react/types/components/input";

const user = JSON.parse(localStorage.getItem("user"));

interface PersonData {
  username: string;
  email: string;
  password: number;
}

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }: , thunkAPI) => {
    try {
      const response = await AuthService.register(username, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch ({ error }: { error: Error }) {
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
    } catch ({ error }: { error: Error }) {
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

export const logout = createAsyncThunk("auth/logout", async () =>{
  await AuthService.logout();
});

export interface IUsersList {
  isLoggedIn: boolean;
  user: PersonData
};

const initialState = user
  ? {isLoggedIn: true, user}
  :{ isLoggedIn: false, user: null } 


  const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
      [register.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
      },
      [register.rejected]: (state, action) => {
        state.isLoggedIn = false;
      },
      [login.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      },
      [login.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
      [logout.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
    },
  }) ;


  const { reducer } = authSlice;
  export default reducer;