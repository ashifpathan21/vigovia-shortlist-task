import React from "react";
import Button from "../ui/Button.jsx";
const BookNow = ({ onClick }) => {
  return (
    <div className="my-10 flex flex-col gap-5 w-fit mx-auto justify-center items-center">
      <h1 className="text-[#321E5D] text-4xl font-medium">PLAN.PACK.GO!</h1>
      <Button title="Book Now" onClick={onClick} />
    </div>
  );
};

export default BookNow;
