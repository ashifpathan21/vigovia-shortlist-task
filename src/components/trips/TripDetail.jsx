import React from "react";
import FlexCol from "../ui/FlexCol.jsx";
const TripDetail = ({data}) => {
  const {
  departureFrom ,
  departureDate,
  arrivalDate,
  destination ,
  noOfTravellers,
} = data
  return (
    <div className="rounded-xl capitalize flex justify-between items-center px-8 border p-3 border-[#541c9c] ">
      <FlexCol heading="Departure from" data={departureFrom} />
      <FlexCol heading="Departure" data={departureDate} />
      <FlexCol heading="arrival" data={arrivalDate} />
      <FlexCol heading="destination" data={destination} />
      <FlexCol heading="No. of travellers" data={noOfTravellers} />
    </div>
  );
};

export default TripDetail;
