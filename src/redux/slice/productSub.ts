import { createSlice } from "@reduxjs/toolkit";
import { productsState } from "../../types/product";

const initialState: productsState = {
  id: 0,
  Products: [],
  name: "",
  appColors: "",
  loading: false,
  error: "",
};

export const ProductSubSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    productBySubId: (state, { payload: { id, munchyColors } }) => {
      state.loading = true;
      state.id = id;
      state.appColors = munchyColors;
      return state;
    },
    productBySubIdSuccess: (state, action) => {
      state.Products = action.payload;
      state.loading = true;
    },

    errorMessage: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { productBySubId, productBySubIdSuccess, errorMessage } =
  ProductSubSlice.actions;

export default ProductSubSlice.reducer;
