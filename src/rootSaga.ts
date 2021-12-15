import { all } from "redux-saga/effects";
import counterSaga from "./sagas/Counter";

function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootSaga;
