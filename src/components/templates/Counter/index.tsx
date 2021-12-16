import React, { MouseEvent } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { actions } from "../../../Slice/Counter";

import CounterHeader from "../../organisms/CounterHeader";
import CounterButtonGroups from "../../organisms/CounterButtonGroups";
function Counter() {
  const dispatch = useDispatch();
  const { currentCount } = useSelector(
    (state: RootStateOrAny) => state.counter
  );
  const handleClickIncrease = (e: MouseEvent, amount: number) => {
    e.preventDefault();
    dispatch(actions.increaseCount({ amount }));
  };
  const handleClickDecrease = (e: MouseEvent, amount: number) => {
    e.preventDefault();
    dispatch(actions.decreaseCount({ amount }));
  };
  const handleClickAsyncIncrease = (e: MouseEvent, amount: number) => {
    e.preventDefault();
    dispatch(actions.asyncIncreaseCount({ amount }));
  };
  const handleClickAsyncDecrease = (e: MouseEvent, amount: number) => {
    e.preventDefault();
    dispatch(actions.asyncDecreaseCount({ amount }));
  };
  const handleClickReset = () => {
    dispatch(actions.resetCounter());
  };
  return (
    <section>
      <CounterHeader count={currentCount}></CounterHeader>
      <CounterButtonGroups
        increase={handleClickIncrease}
        decrease={handleClickDecrease}
        asyncIncrease={handleClickAsyncIncrease}
        asyncDecrease={handleClickAsyncDecrease}
      />
    </section>
  );
}

export default Counter;
