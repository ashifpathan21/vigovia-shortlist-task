import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      className="bg-[#541C9C] rounded-4xl p-3  w-full mx-auto px-10  text-white font-semibold "
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
