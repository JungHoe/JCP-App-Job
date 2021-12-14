import { all } from "redux-saga/effects";
import counterSaga from "./Counter";

function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootSaga;
