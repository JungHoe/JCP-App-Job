import React from "react";
import { Button } from "antd";

interface counterProperty {
  count: number;
  amount?: number;
  increase(e: any, amount: number): void;
  decrease(e: any, amount: number): void;
}

function Counter({ count, amount = 1, increase, decrease }: counterProperty) {
  return (
    <div>
      <div>카운터 {count}</div>
      <Button onClick={(e) => increase(e, amount)}>증가</Button>
      <Button onClick={(e) => decrease(e, amount)}>감소</Button>
    </div>
  );
}

export default Counter;
