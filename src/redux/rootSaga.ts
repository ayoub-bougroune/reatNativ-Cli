import { all, spawn, fork } from "redux-saga/effects";
import { watchCategories } from "./sagas/categories";
import { watchLogin, watchLogout } from "./sagas/signIn ";
import { watchSignUp } from "./sagas/signUp";
import { watchProductSub } from "./sagas/productSub";
import { watchProducts } from "./sagas/products";
import { watchSubCategories } from "./sagas/subCategories";
import { watchSearch } from "./sagas/search";
import { watchCartId } from "./sagas/cartId";
import { watchAddCartItems } from "./sagas/addTo_cart";
import { watchCartItems } from "./sagas/getCart_items";
import { watchIncrement } from "./sagas/counter";
import { watchSingleProduct } from "./sagas/single_Product";
import { watchDelete } from "./sagas/getCart_items";

export default function* rootSaga() {
  const sagas = [
    watchLogin,
    watchSignUp,
    watchLogout,
    watchCategories,
    watchSearch,
    watchSubCategories,
    watchProducts,
    watchProductSub,
    watchCartId,
    watchAddCartItems,
    watchCartItems,
    watchIncrement,
    watchSingleProduct,
    watchDelete
  ];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield fork(saga);
            break;
          } catch (e) {
            console.log("Root Error Saga",e);
          }
        }
      })
    )
  );
}
