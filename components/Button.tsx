
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "px-8 py-4 font-extrabold uppercase tracking-widest transition-all duration-200 text-sm border-2";
  
  const variants = {
    primary: "bg-[#FF6B35] border-[#FF6B35] text-white hover:bg-[#E55A2B] hover:border-[#E55A2B]",
    secondary: "bg-[#1B365D] border-[#1B365D] text-white hover:bg-[#15294a] hover:border-[#15294a]",
    outline: "bg-transparent border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
