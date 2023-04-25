import { createSlice } from "@reduxjs/toolkit";
import { CartItemsState } from "../../types/cart";

const initialState: CartItemsState = {
  CartItems: {
      map: () => {console.log("")},
      item_id: 0,
      sku: "",
      qty: 0,
      name: "",
      price: 0,
      product_type: "",
      quote_id: "",
  },
    loading: false,
    error: "",
};

export const CartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {

          getItemStart: (state) => {
            state.loading = true;
            return state; 
          },
          
          getCartItems: (state, action) => {
            state.CartItems = action.payload;
            state.loading = true;
          },
           
          deleteProduct: (state, { payload:{id}}) => {
            state = id;
            return state;
           },
          deleteSuccess: (state, { payload:{id}}) => {
            state.CartItems.item_id = id;
            return state;
           },
          errorMessage: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
  },
});

export const {  getItemStart, getCartItems, deleteProduct, deleteSuccess, errorMessage } = CartItemsSlice.actions;

export default CartItemsSlice.reducer;
