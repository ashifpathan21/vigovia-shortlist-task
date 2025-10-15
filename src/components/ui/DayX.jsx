import React from "react";

const DayX = ({ day }) => {
  return (
    <div className="rotate-270 text-white flex justify-center h-[60px] items-center max-w-[300px] w-full font-semibold px-6 py-4  rounded-2xl bg-[#321E5D]">
      <h1 className="text-xl p-2">{`Day ${day}`}</h1>
    </div>
  );
};

export default DayX;
