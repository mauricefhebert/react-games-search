import { ReactNode } from "react";

const Alert = ({ children, color = "primary", onClose }: Props) => {
  return (
    <div
      className={"alert alert-" + color + " alert-dismissible fade show"}
      role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"></button>
    </div>
  );
};

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "warning";
  onClose: () => void;
}

export default Alert;
