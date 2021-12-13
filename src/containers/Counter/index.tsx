import React from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions/Counter";

import CounterView from "../../components/Counter";
const Counter = () => {
  const dispatch = useDispatch();
  const { currnetNum } = useSelector((state: RootStateOrAny) => state.counter);

  const hadleIncrease = (e: any, amount: number) => {
    e.preventDefault();
    dispatch(actions.increase(amount));
  };
  const handleDecrease = (e: any, amount: number) => {
    e.preventDefault();
    dispatch(actions.decrease(amount));
  };
  return (
    <div>
      카운터 tsx
      <CounterView
        count={currnetNum}
        increase={hadleIncrease}
        decrease={handleDecrease}
      ></CounterView>
      <button>리셋버튼</button>
    </div>
  );
};

export default Counter;
