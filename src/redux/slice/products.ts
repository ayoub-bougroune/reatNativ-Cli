import { createSlice } from "@reduxjs/toolkit";
import { productState } from "../../types/product";

const initialState: productState = {
  id: 0,
  name: "",
  Product: [],
  appColors: "",
  loading: false,
  error: "",
};

export const ProductsSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    productsById: (state, { payload: { id, name, munchyColors } }) => {
      state.loading = true;
      state.id = id;
      state.name = name;
      state.appColors = munchyColors;
      return state;
    },
    productsByIdSuccess: (state, action) => {
      state.Product = action.payload;
      state.loading = true;
    },

    errorMessage: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { productsById, productsByIdSuccess, errorMessage } =
  ProductsSlice.actions;

export default ProductsSlice.reducer;
