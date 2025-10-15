import React from "react";
import Heading from "../ui/Heading.jsx";
import FlightSummaries from "./FlightSummaries.jsx";

const FlightSummary = ({ data = [
    {
      flightDate: "Thu 10 Jan’24",
      flightName: "Fly Air India (AX-123) ",
      from: "Delhi",
      to: "Singapore",
    },
    {
      flightDate: "Thu 10 Jan’24",
      flightName: "Fly Air India (AX-123) ",
      from: "Delhi",
      to: "Singapore",
    },
    {
      flightDate: "Thu 10 Jan’24",
      flightName: "Fly Air India (AX-123) ",
      from: "Delhi",
      to: "Singapore",
    },
    {
      flightDate: "Thu 10 Jan’24",
      flightName: "Fly Air India (AX-123) ",
      from: "Delhi",
      to: "Singapore",
    },
  ]
}) => {

  return (
    <div className="my-10 border-b border-slate-900 ">
      <Heading title="flight summary" />
      <FlightSummaries data={data} />
    </div>
  );
};

export default FlightSummary;
