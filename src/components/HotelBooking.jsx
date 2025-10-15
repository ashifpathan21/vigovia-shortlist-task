import React from "react";
import Heading from "./ui/Heading.jsx";
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
  return (
    <div>
      <Heading title="Hotel bookings" />
      <HotelBookingTable data={data} />
    </div>
  );
};

export default HotelBooking;
