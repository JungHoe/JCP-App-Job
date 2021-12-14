import React from "react";
import { Button } from "antd";

interface counterProperty {
  count: number;
  amount?: number;
  increase(e: any, amount: number): void;
  decrease(e: any, amount: number): void;
  asyncIncrease(e: any, amount: number): void;
  asyncDecrease(e: any, amount: number): void;
}

function Counter({
  count,
  amount = 1,
  increase,
  decrease,
  asyncIncrease,
  asyncDecrease,
}: counterProperty) {
  return (
    <div>
      <div>카운터 {count}</div>
      <Button onClick={(e) => increase(e, amount)}>증가</Button>
      <Button onClick={(e) => decrease(e, amount)}>감소</Button>
      <Button onClick={(e) => asyncIncrease(e, amount + 1)}>비동기 증가</Button>
      <Button onClick={(e) => asyncDecrease(e, amount + 1)}>비동기 감소</Button>
    </div>
  );
}

export default Counter;
