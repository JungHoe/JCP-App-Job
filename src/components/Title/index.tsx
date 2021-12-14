import React from "react";

interface TitleParams {
  content: string;
  description: string;
}
export default function Title({ content, description }: TitleParams) {
  return (
    <div>
      <h3>{content}</h3>
      <span>{description}</span>
    </div>
  );
}
