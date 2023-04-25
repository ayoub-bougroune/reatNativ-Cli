import { createSlice } from "@reduxjs/toolkit";
import { signInState } from "../../types/customer";

const initialState: signInState = {
  loading: false,
  tokens: null,
  error: "",
  username: "",
  password: "",
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    signInStart: (state, { payload: { username, password } }) => {
      state.username = username;
      state.password = password;
      state.loading = true;
    },

    successSignIn: (state, action) => {
      state.tokens = action.payload;
      state.loading = false;
    },

    failureLogin: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.tokens = null;
      state.loading = false;
    },
  },
});

export const { successSignIn, failureLogin, signInStart, logout } =
  signInSlice.actions;

export default signInSlice.reducer;
