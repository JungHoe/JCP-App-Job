import React, { MouseEvent } from "react";
import AtomButton from "../../atoms/Button";

interface EventHandlerProperty {
  increase(e: MouseEvent, amount: number): void;
  decrease(e: MouseEvent, amount: number): void;
  asyncIncrease(e: MouseEvent, amount: number): void;
  asyncDecrease(e: MouseEvent, amount: number): void;
}

function CounterButtonGroups({
  increase,
  decrease,
  asyncIncrease,
  asyncDecrease,
}: EventHandlerProperty) {
  return (
    <>
      <AtomButton
        label="증가"
        onClick={(e: MouseEvent) => increase(e, 1)}
      ></AtomButton>
      <AtomButton
        label="감소"
        onClick={(e: MouseEvent) => decrease(e, 1)}
      ></AtomButton>
      <AtomButton
        label="비동기 증가"
        onClick={(e: MouseEvent) => asyncIncrease(e, 1)}
      ></AtomButton>
      <AtomButton
        label="비동기 감소"
        onClick={(e: MouseEvent) => asyncDecrease(e, 1)}
      ></AtomButton>
    </>
  );
}

export default CounterButtonGroups;
