import React from "react";

const ArrowCart = ({ heading, title, description }) => {
  return (
    <div className="rounded-2xl capitalize  border overflow-hidden border-[#541C9C] p-0  w-full flex gap-10 items-center">
      <div className="p-2 flex relative justify-center rounded-2xl items-center  border border-[#541C9C]  bg-[#F9EEFF] w-[319px] ">
        <h1 className="text-xl font-semibold ">{heading}</h1>
        <div className="absolute right-0 -translate-y-[21.5px] -translate-x-[10px]  scale-270 ">
          <div className="bg-transparent -translate-x-[0.7px]  w-0 h-0 absolute z-10 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent border-l-[#F9EEFF]  "></div>
          <div className="bg-white w-0 h-0  border-t-[8px] absolute z-0 border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent border-l-[#541C9C]  "></div>
        </div>
      </div>

      <div className="flex items-center gap-2  justify-center w-full">
        <h1 className="font-semibold text-xl  ">{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default ArrowCart;
