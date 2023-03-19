import React, { ButtonHTMLAttributes } from "react";

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning";
  onClick: () => void;
}

export default Button;
