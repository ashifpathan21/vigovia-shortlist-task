import React from "react";
import ArrowCart from "../ui/ArrowCart.jsx";

const FlightSummaries = ({ data }) => {
  return (
    <div className="my-10 flex flex-col gap-4 w-full ">
      {data?.map((flight, i) => (
        <ArrowCart
          key={i}
          heading={flight?.flightDate}
          title={flight?.flightName}
          description={`from ${flight?.from} to ${flight?.to}`}
        />
      ))}
      <p className="text-[#000000] text-md font-light ">
        Note: All flights include meals, seat choice (excluding XL), and
        20kg/25Kg checked baggage.
      </p>
    </div>
  );
};

export default FlightSummaries;
