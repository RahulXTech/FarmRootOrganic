import React from "react";
import classNames from "classnames";

export function Button({ children, onClick, className = "", variant = "default", type = "button" }) {
  const baseStyle = "px-4 py-2 rounded-2xl font-medium transition-all duration-200";

  const variants = {
    default: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-green-600 text-green-600 hover:bg-green-50",
    link: "text-green-600 underline hover:text-green-800 px-0 py-0",
  };

  const combined = classNames(baseStyle, variants[variant], className);

  return (
    <button type={type} className={combined} onClick={onClick}>
      {children}
    </button>
  );
}
