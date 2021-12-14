import React from "react";
import Styled from "styled-components";
import Title from "../../components/Title";

const Wrapper = Styled.section``;

export default function JobManagement() {
  return (
    <Wrapper id="management">
      <Title
        content="Job"
        description="Data Anaylize를 수행하는 Job을 관리합니다."
      ></Title>
    </Wrapper>
  );
}
