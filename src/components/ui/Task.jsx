import React from "react";

const Task = ({ title, data }) => {
  return (
    <div className=" w-full flex justify-between gap-10 -translate-x-7 items-start  ">
      <div className="rounded-full h-[10px] w-[10px] bg-white border-4 p-2 border-[#321E5D]"></div>
      <div className="flex justify-between items-start w-full">
        <h2 className="font-semibold ">{title}</h2>
        <ul className="flex flex-col text-md list-disc h-full w-[50%] md:w-[60%] lg:w-[70%] gap-2 ">
          {data?.map((item , i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task;
