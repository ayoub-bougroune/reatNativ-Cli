import { createSlice } from "@reduxjs/toolkit";
import { CartItemState } from "../../types/cart";

const initialState: CartItemState = {
    id: 0,
    CartId:0,
    CartItem: {
     sku: "",
     qty: 1,
     quote_id: 0,
    },
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    loading: false,
    error: "",
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
        addItemStart: (state, {payload: { cartItem }}) => {
        state.CartItem = cartItem;
        state.loading = true;
        },
        
        addItemToCart: (state, action) => {
        state = action.payload;
        state.loading = true;
        },

        errorMessage: (state, action) => {
        state.error = action.payload;
        state.loading = false;
        },
  },
});

export const {  addItemStart, addItemToCart, errorMessage } = CartSlice.actions;

export default CartSlice.reducer;
