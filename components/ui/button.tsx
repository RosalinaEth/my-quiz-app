import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
