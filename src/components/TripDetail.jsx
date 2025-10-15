import React from "react";
import FlexCol from "./ui/FlexCol.jsx";
const TripDetail = ({
  departureFrom = "mumbai",
  departure = "31/10/2025",
  arrival = "01/11/2025",
  destination = "singapore",
  noOfTravellers = "4",
}) => {
  return (
    <div className="rounded-xl capitalize flex justify-between items-center px-8 border p-3 border-[#541c9c] ">
      <FlexCol heading="Departure from" data={departureFrom} />
      <FlexCol heading="Departure" data={departure} />
      <FlexCol heading="arrival" data={arrival} />
      <FlexCol heading="destination" data={destination} />
      <FlexCol heading="No. of travellers" data={noOfTravellers} />
    </div>
  );
};

export default TripDetail;
