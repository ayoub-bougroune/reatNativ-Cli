import { Effect, put, call, takeLatest } from "redux-saga/effects";
import { searchStart, searchSuccess, errorMessage } from "../slice/search";
import { searchProductAPI } from "../../services/api";
import { Product, ListResponse } from "../../types/product";

function* searchAction(action: Effect) {
  try {
    const text = action.payload;
    const response: ListResponse<Product> = yield call(() =>
      searchProductAPI(text)
    );
    const result = response.data;
    if (result) {
      yield put(searchSuccess(result));
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    console.log(error);
    yield put(errorMessage(error));
  }
}

export function* watchSearch() {
  yield takeLatest(searchStart, searchAction);
}
