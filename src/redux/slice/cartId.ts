import { createSlice } from "@reduxjs/toolkit";
import { CartIdState } from "../../types/cart";

const initialState: CartIdState = {
    CartId:0,
    loading: false,
    error: "",
};

export const CartIdSlice = createSlice({
  name: "cartId",
  initialState,
  reducers: {
        
         getCartIdStart: (state) => {
          state.loading = false;
         },
    
        getCartId: (state, action) => {
          state.CartId = action.payload;
          state.loading = false;
        },

        errorMessage: (state, action) => {
        state.error = action.payload;
        state.loading = false;
        },
  },
});

export const { getCartIdStart, getCartId, errorMessage } = CartIdSlice.actions;

export default CartIdSlice.reducer;
