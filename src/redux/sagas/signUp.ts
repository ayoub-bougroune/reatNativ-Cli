import {
  Effect,
  put,
  call,
  SagaReturnType,
  takeLatest,
} from "redux-saga/effects";
import { signUp } from "../../services/api";
import { signUpStart, Signup, failureSignup } from "../slice/signUp";
import AsyncStorage from "@react-native-async-storage/async-storage";

type signUpServiceResponse = SagaReturnType<typeof signUp>;
export function* signUpSaga(action: Effect) {
  try {
    const { customer, password } = action.payload;
    const response: signUpServiceResponse = yield call(() =>
      signUp(customer, password)
    );
    const userInfo = response.data;
    yield put(Signup(userInfo));
    console.log(userInfo);
    AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
    console.log("Success");
  } catch (error) {
    console.log(error);
    yield put(failureSignup(error));
  }
}
export function* watchSignUp() {
  yield takeLatest(signUpStart, signUpSaga);
}
