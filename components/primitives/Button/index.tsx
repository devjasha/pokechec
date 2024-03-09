"use client";

import { FC } from "react";

type ButtonProps = {
  content: string;
};

const Button: FC<ButtonProps> = ({ content }) => {
  return <button>{content}</button>;
};

export default Button;
