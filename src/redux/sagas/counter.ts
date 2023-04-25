import { Effect, put, call, takeLatest } from "redux-saga/effects";
import { incrementStart, incrementSuccess, errorMessage } from "../slice/counter";
import { increment } from "../../services/api";
import { CartItem, ListResponse } from "../../types/cart";

function* incrementAction(action: Effect) {
  try {
    const { id, cartItem } = action.payload;
    const response: ListResponse<CartItem> = yield call(() =>
      increment(id, cartItem)
    );
    const result = response.data;
    if (result) {
      yield put(incrementStart(result));
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    console.log(error);
    yield put(errorMessage(error));
  }
}

export function* watchIncrement() {
  yield takeLatest(incrementStart, incrementAction);
}
