import {
  Effect,
  put,
  call,
  SagaReturnType,
  takeLatest,
} from "redux-saga/effects";
import { signIn } from "../../services/api";
import {
  failureLogin,
  successSignIn,
  signInStart,
  logout,
} from "../slice/signIn";
import AsyncStorage from "@react-native-async-storage/async-storage";

type signInServiceResponse = SagaReturnType<typeof signIn>;
export function* loginSaga(action: Effect) {
  try {
    const { username, password } = action.payload;
    const response: signInServiceResponse = yield call(() =>
      signIn(username, password)
    );
    const token = response.data;
    if (token) {
      console.log("token stored", token);
      yield call(AsyncStorage.setItem, "tokens", JSON.stringify(token));
      yield put(successSignIn(token));
      console.log("Success");
    } else {
      console.log("error: null token");
    }
  } catch (error) {
    console.log(error);
    yield put(failureLogin(error));
  }
}
function* logoutSaga() {
  yield call(() => AsyncStorage.removeItem("tokens"));
  console.log("tokens removed");
}

export function* watchLogin() {
  yield takeLatest(signInStart, loginSaga);
}

export function* watchLogout() {
  yield takeLatest(logout, logoutSaga);
}
