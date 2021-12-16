import React from "react";
import styled from "styled-components";

interface SpanProperty {
  label: string;
  className?: string;
}
const StyledSpan = styled.span``;

function AtomSpan({ label, className = "" }: SpanProperty) {
  return <StyledSpan className={className}>{label}</StyledSpan>;
}

export default AtomSpan;
