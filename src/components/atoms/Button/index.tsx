import React, { MouseEvent } from "react";
import { Button } from "antd";

interface ButtonProperty {
  label: string;
  onClick?(e?: MouseEvent): void;
  className?: string;
}
function AtomButton({ label, className = "", onClick }: ButtonProperty) {
  return (
    <Button onClick={onClick} className={className}>
      {label}
    </Button>
  );
}

export default AtomButton;
