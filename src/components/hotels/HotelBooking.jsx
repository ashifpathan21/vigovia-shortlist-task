import React from "react";
import Heading from "../ui/Heading.jsx";
import HotelBookingTable from "./HotelBookingTable.jsx";
const HotelBooking = () => {
  const data = [
    {
      city: "singapore",
      checkIn: "24/02/2024",
      checkOut: "25/02/2025",
      nights: "2",
      hotelName: "Super Townhouse Oak Vashi formerly Blue Diamond",
    },
    {
      city: "singapore",
      checkIn: "24/02/2024",
      checkOut: "25/02/2025",
      nights: "2",
      hotelName: "Super Townhouse Oak Vashi formerly Blue Diamond",
    },
    {
      city: "singapore",
      checkIn: "24/02/2024",
      checkOut: "25/02/2025",
      nights: "2",
      hotelName: "Super Townhouse Oak Vashi formerly Blue Diamond",
    },
    {
      city: "singapore",
      checkIn: "24/02/2024",
      checkOut: "25/02/2025",
      nights: "2",
      hotelName: "Super Townhouse Oak Vashi formerly Blue Diamond",
    },
  ];
  const instructions = [
    "All hotels are tentative and can be replaced with similar.",
    "Breakfast included for all hotel stays.",
    "All Hotels will be 4* and above category",
    "A maximum occupancy of 2 people/room is allowed in most hotels. ",
  ];
  return (
    <div className="flex flex-col gap-3 pb-5">
      <Heading title="Hotel bookings" />
      <HotelBookingTable data={data} />
      {/* instructions */}
      <div>
        <ol className="list-decimal text-sm font-light">
          {instructions?.map((instruction, i) => (
            <li key={i}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default HotelBooking;
