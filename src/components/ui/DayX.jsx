import React from "react";

const DayX = ({ day }) => {
  return (
    <div className=" text-white flex justify-center items-center  max-w-[50px] w-full  min-h-[250px] font-semibold   rounded-2xl bg-[#321E5D]">
      <h1 className="text-xl text-center rotate-270 max-h-[20px] min-w-[60px] w-full ">{`Day ${day}`}</h1>
    </div>
  );
};

export default DayX;
