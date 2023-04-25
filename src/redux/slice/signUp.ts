import { createSlice } from "@reduxjs/toolkit";
import { signUpState } from "../../types/customer";

const initialState: signUpState = {
  loading: false,
  error: "",
  Customer: {
    email: "",
    firstName: "",
    lastName: "",
    addresses: [],
  },
  password: "",
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signUpStart: (state, { payload: { customer, password } }) => {
      state.Customer = customer;
      state.password = password;
      state.loading = true;
      return state;
    },

    Signup: (state, action) => {
      state = action.payload;
      state.loading = false;
    },

    failureSignup: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signUpStart, Signup, failureSignup } = signupSlice.actions;

export default signupSlice.reducer;
