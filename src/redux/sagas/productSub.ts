import { call, put, takeEvery as takeLatest, Effect } from "redux-saga/effects";
import {
  productBySubId,
  productBySubIdSuccess,
  errorMessage,
} from "../slice/productSub";
import { ProductsByIdCat as ProductsByIdSub } from "../../services/api";
import { Product, ListResponse } from "../../types/product";

function* ProductBySubCategoryId(action: Effect) {
  try {
    const id = action.payload;
    const response: ListResponse<Product> = yield call(() =>
      ProductsByIdSub(id)
    );
    const result = response.data;
    if (result) {
      yield put(productBySubIdSuccess(result));
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    console.log(error);
    yield put(errorMessage(error));
  }
}

export function* watchProductSub() {
  yield takeLatest(productBySubId, ProductBySubCategoryId);
}
