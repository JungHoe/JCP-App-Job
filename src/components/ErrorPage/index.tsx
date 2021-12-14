import React from "react";

interface ErrorPageType {
  message: string;
}

export default function ErrorPage({ message }: ErrorPageType) {
  return <div>{message}</div>;
}
