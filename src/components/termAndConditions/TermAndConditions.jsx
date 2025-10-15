import React from "react";
import Heading from "../ui/Heading.jsx";

const TermAndConditions = () => {
  return (
    <div className="flex items-start flex-col gap-6 mb-10 ">
      <Heading title="terms and conditions" />
      <button className="underline text-xl font-medium text-[#2F80ED] hover:cursor-pointer">
        View all terms and conditions{" "}
      </button>
    </div>
  );
};

export default TermAndConditions;
