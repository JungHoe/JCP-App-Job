import React from "react";
import styled from "styled-components";
import AtomHeader from "../../atoms/Header";
import AtomSpan from "../../atoms/Span";

const Wrapper = styled.div``;

interface CounteHeaderProperty {
  count: number;
}
function CounterHeader({ count }: CounteHeaderProperty) {
  return (
    <Wrapper>
      <AtomHeader
        title={"Counter TSX"}
        description="아토믹 디자인 연습입니다."
      ></AtomHeader>
      <AtomSpan label={`카운터 ${count}`}></AtomSpan>
    </Wrapper>
  );
}

export default CounterHeader;
