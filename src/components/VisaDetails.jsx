import React from "react";
import FlexCol from "./ui/FlexCol.jsx";
import Heading from "./ui/Heading.jsx";

const VisaDetails = () => {
  const visa = {
    visaType: "123456",
    validity: "123456",
    processingDate: "123456",
  };
  return (
    <div className="flex flex-col gap-6 mb-10 ">
      <Heading title="Visa details" />
      <div className="rounded-xl capitalize flex justify-around items-center px-8 border p-3 border-[#541c9c] ">
        <FlexCol heading="visa type" data={visa?.visaType} />
        <FlexCol heading="validity" data={visa?.validity} />
        <FlexCol heading="processing date" data={visa?.processingDate} />
      </div>
    </div>
  );
};

export default VisaDetails;
