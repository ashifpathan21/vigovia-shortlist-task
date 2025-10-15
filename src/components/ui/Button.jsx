import React from "react";

// Button Component
const Button = ({ title, onClick, type = "button", variant = "primary" }) => {
  const variants = {
    primary: "bg-[#541C9C] hover:bg-[#6B24B8]",
    secondary: "bg-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button
      type={type}
      className={`${variants[variant]} rounded-lg p-3 w-full mx-auto px-10 text-white font-semibold transition-colors`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
