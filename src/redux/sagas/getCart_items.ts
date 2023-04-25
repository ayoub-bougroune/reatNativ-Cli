import { call, Effect, put, takeLatest } from "redux-saga/effects";
import {
    getItemStart,
    getCartItems,
    deleteProduct,
    deleteSuccess,
    errorMessage 
} from "../slice/getCart_items";
import { getCartItemsAPI, deleteItem } from "../../services/api";
import { CartItems, ListResponse } from "../../types/cart";

function* CartList() {
  try {
    const response: ListResponse<CartItems> = yield call(() =>
      getCartItemsAPI()
    );
    const result = response.data;
    if (result) {
      yield put(getCartItems(result));
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    console.log(error);
    yield put(errorMessage(error));
  }
}


function* removeItem(action: Effect) {
  try {
     const id = action.payload;
    const response: ListResponse<CartItems> = yield call(() =>
      deleteItem(id)
    );
    const result = response.data;
    if (result) {
      yield put(deleteSuccess(result));
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    console.log(error);
    yield put(errorMessage(error));
  }
}

export function* watchCartItems() {
  yield takeLatest(getItemStart, CartList);
}

export function* watchDelete() {
  yield takeLatest(deleteProduct, removeItem);
}