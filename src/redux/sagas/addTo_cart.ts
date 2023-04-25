import { Effect, put, call, takeLatest } from "redux-saga/effects";
import {  addItemStart, addItemToCart,errorMessage } from "../slice/addTo_cart";
import { addItemAPI } from "../../services/api";
import { CartItem, ListResponse } from "../../types/cart";

function* AddItemAction(action: Effect) {
  try {
    const cartItem  = action.payload;
    const response: ListResponse<CartItem> = yield call(() =>
      addItemAPI(cartItem)
    );
    const result = response.data;
    if (result) {
      yield put(addItemToCart(result));
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    console.log(error);
    yield put(errorMessage(error));
  }
}


export function* watchAddCartItems() {
  yield takeLatest(addItemStart, AddItemAction);
}



