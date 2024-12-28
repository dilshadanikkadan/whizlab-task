import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

enum ButtonType {
  Submit = "submit",
  Button = "button",
  Reset = "reset"
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
  type?: ButtonType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ 
  value,
  className,
  children,
  type = ButtonType.Button,
  disabled = false,
  onClick,
  ...props 
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {value || children}
    </button>
  );
};

export default Button;