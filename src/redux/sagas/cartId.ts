import { put, call, takeLatest } from "redux-saga/effects";
import {  getCartIdStart, getCartId, errorMessage } from "../slice/cartId";
import { generateCartId } from "../../services/api";
import {  ListResponse } from "../../types/cart";
import AsyncStorage from "@react-native-async-storage/async-storage";


function* CartIdAction() {
  try {
    const response: ListResponse<number> = yield call(() => generateCartId());
    const CartId = response.data;
    if (CartId) {
      yield call(AsyncStorage.setItem, "CartId", JSON.stringify(CartId));
      yield put(getCartId(CartId));
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    console.log(error);
    yield put(errorMessage(error));
  }
}

export function* watchCartId() {
  yield takeLatest(getCartIdStart, CartIdAction);
}

