import React from "react";
import styled from "styled-components";

const SteldHeader = styled.header``;

interface headerProperty {
  title: string;
  description: string;
}

function AtomHeader({ title, description }: headerProperty) {
  return (
    <SteldHeader>
      <h3>{title}</h3>
      <span>{description}</span>
    </SteldHeader>
  );
}

export default AtomHeader;
