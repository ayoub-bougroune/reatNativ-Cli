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

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    
        incrementStart: (state, action) => {
        state = action.payload;
        return state;
        },
        
        incrementSuccess: (state, action) => {
        state = action.payload;
        state.loading = true;
        },

        errorMessage: (state, action) => {
        state.error = action.payload;
        state.loading = false;
        },
  },
});

export const {  incrementStart, incrementSuccess, errorMessage } = CounterSlice.actions;

export default CounterSlice.reducer;
