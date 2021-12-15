import React from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { actions } from "../../Slice/Counter";

import CounterView from "../../components/Counter";
const Counter = () => {
  const dispatch = useDispatch();
  const { currentCount } = useSelector(
    (state: RootStateOrAny) => state.counter
  );

  const hadleIncrease = (e: any, amount: number) => {
    e.preventDefault();
    dispatch(actions.increaseCount({ amount }));
  };
  const handleDecrease = (e: any, amount: number) => {
    e.preventDefault();
    dispatch(actions.decreaseCount({ amount }));
  };
  const handleAsyncIncrease = (e: any, amount: number) => {
    e.preventDefault();
    dispatch(actions.asyncIncreaseCount({ amount }));
  };
  const handleAsyncDecrease = (e: any, amount: number) => {
    e.preventDefault();
    dispatch(actions.asyncDecreaseCount({ amount }));
  };
  const handleReset = () => {
    dispatch(actions.resetCounter());
  };
  return (
    <div>
      카운터 tsx
      <CounterView
        count={currentCount}
        increase={hadleIncrease}
        decrease={handleDecrease}
        asyncIncrease={handleAsyncIncrease}
        asyncDecrease={handleAsyncDecrease}
      ></CounterView>
      <button onClick={handleReset}>리셋버튼</button>
    </div>
  );
};

export default Counter;
