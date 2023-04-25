import { call, put, takeEvery, Effect } from "redux-saga/effects";
import {
  loadSubCategoriesStart,
  loadSubCategoriesSuccess,
  loadSubErrorCategories,
} from "../slice/subCategories";
import { SubCategories } from "../../services/api";
import { Categories, ListResponse } from "../../types/categories";

function* SubCategoryById(action: Effect) {
  try {
    const id = action.payload;
    const response: ListResponse<Categories> = yield call(() =>
      SubCategories(id)
    );
    const result = response.data;
    if (result) {
      yield put(loadSubCategoriesSuccess(result));
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    console.log(error);
    yield put(loadSubErrorCategories(error));
  }
}

export function* watchSubCategories() {
  yield takeEvery(loadSubCategoriesStart, SubCategoryById);
}
