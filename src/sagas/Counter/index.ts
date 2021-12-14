import { takeEvery, all, delay, put } from "redux-saga/effects";
import * as actions from "../../actions/Counter";

interface countActionParams {
  type: string;
  payload: number;
}

function* asyncIncrease(action: countActionParams) {
  console.log("Hello Sagas!", action);
  yield delay(1000);
  yield put(actions.increase(action.payload));
}

function* asyncDecrease(action: countActionParams) {
  console.log("Hello Sagas!", action);
  yield delay(1000);
  yield put(actions.decrease(action.payload));
}

export default function* counterSaga() {
  yield takeEvery(actions.asyncIncrease.toString(), asyncIncrease);
  yield takeEvery(actions.asyncDecrease.toString(), asyncDecrease);
}
