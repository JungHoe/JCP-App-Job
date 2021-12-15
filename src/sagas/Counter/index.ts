import { takeEvery, all, delay, put } from "redux-saga/effects";
import { actions } from "../../Slice/Counter";

interface changeParameter {
  type: string;
  payload: { amount: number };
}

function* asyncIncrease(action: changeParameter) {
  console.log("Hello Sagas!", action);
  yield delay(1000);
  yield put(actions.increaseCount({ amount: action.payload.amount }));
}

function* asyncDecrease(action: changeParameter) {
  console.log("Hello Sagas!", action);
  yield delay(1000);
  yield put(actions.decreaseCount({ amount: action.payload.amount }));
}

export default function* counterSaga() {
  yield takeEvery(actions.asyncIncreaseCount.type, asyncIncrease);
  yield takeEvery(actions.asyncDecreaseCount.type, asyncDecrease);
}
