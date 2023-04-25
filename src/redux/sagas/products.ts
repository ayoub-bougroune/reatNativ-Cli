import { Effect, put, call, takeLatest } from "redux-saga/effects";
import {
  productsById,
  productsByIdSuccess,
  errorMessage,
} from "../slice/products";
import { ProductsByIdCat } from "../../services/api";
import { Product, ListResponse } from "../../types/product";

function* ProductByCategoryId(action: Effect) {
  try {
    const id = action.payload;
    const response: ListResponse<Product> = yield call(() =>
      ProductsByIdCat(id)
    );
    const result = response.data;
    if (result) {
      yield put(productsByIdSuccess(result));
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    console.log(error);
    yield put(errorMessage(error));
  }
}

export function* watchProducts() {
  yield takeLatest(productsById, ProductByCategoryId);
}
