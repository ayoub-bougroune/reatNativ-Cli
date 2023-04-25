import { Effect, put, call, takeLatest } from "redux-saga/effects";
import {
    singleProductStart,
    singleProductSuccess,
    loadError,
} from "../slice/single_product";
import { singleProduct } from "../../services/api";
import { Product, ListResponse } from "../../types/product";

function* ProductBySku(action: Effect) {
  try {
    const sku = action.payload;
    const response: ListResponse<Product> = yield call(() =>
      singleProduct(sku)
    );
    const result = response.data;
    if (result) {
      yield put(singleProductSuccess(result));
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    console.log(error);
    yield put(loadError(error));
  }
}

export function* watchSingleProduct() {
  yield takeLatest(singleProductStart, ProductBySku);
}
