import { createSlice } from "@reduxjs/toolkit";
import { ISearch } from "../../types/product";

const initialState: ISearch = {
  text: "",
  Product: [],
  loading: false,
  error: "",
};

export const search = createSlice({
  name: "Product",
  initialState,
  reducers: {
    searchStart: (state, { payload: { text } }) => {
      state.loading = true;
      state.text = text;
      return state;
    },

    searchSuccess: (state, action) => {
      state.Product = action.payload;
      state.loading = true;
    },

    errorMessage: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { searchStart, searchSuccess, errorMessage } = search.actions;

export default search.reducer;
