import { createSlice } from "@reduxjs/toolkit";
import { singlePState } from "../../types/product";

const initialState: singlePState = {
  sku: "",
  Product: {
      sku: "",
      price: 0,
      name: "",
    search_criteria: {
        filter_groups: [],
        sort_orders:[]
    },
    total_count: 0,
  },
  loading: false,
  error: "",
};

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
      singleProductStart: (state, { payload: { sku } }) => {
      state.Product.sku = sku;
      return state;
    },

      singleProductSuccess: (state, action) => {
      state.Product = action.payload;
      state.loading = false;
    },

      loadError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  singleProductStart,
  singleProductSuccess,
  loadError,
} = singleProductSlice.actions;

export default singleProductSlice.reducer;
