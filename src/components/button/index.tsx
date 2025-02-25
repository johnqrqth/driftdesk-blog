import React, { ReactNode } from "react";
import './button.css'

interface ButtonProps {
  // type?: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
  theme?: "light" | "dart";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
}) => {


  return (
    <button
      className='button'
      //   type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
