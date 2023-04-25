import { call, put, takeLatest } from "redux-saga/effects";
import {
  loadCategoriesStart,
  loadCategoriesSuccess,
  loadErrorCategories,
} from "../slice/categories";
import { getCategories } from "../../services/api";
import { Categories, ListResponse } from "../../types/categories";

function* AllCategoriesList() {
  try {
    const response: ListResponse<Categories> = yield call(() =>
      getCategories()
    );
    const result = response.data;
    if (result) {
      yield put(loadCategoriesSuccess(result));
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    console.log(error);
    yield put(loadErrorCategories(error));
  }
}

export function* watchCategories() {
  yield takeLatest(loadCategoriesStart, AllCategoriesList);
}
