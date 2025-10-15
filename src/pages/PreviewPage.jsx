import React from "react";
import Header from "../components/Header.jsx";
import TripDetail from "../components/TripDetail.jsx";
import DayPlan from "../components/DayPlan.jsx";
import FlightSummary from "../components/FlightSummary.jsx";
import HotelBooking from "../components/HotelBooking.jsx";
const PreviewPage = () => {
  return (
    <div className="flex flex-col px-20 gap-5 h-full  max-w-screen ">
      <Header />
      <TripDetail />
      <DayPlan />
      <FlightSummary />
      <HotelBooking />
    </div>
  );
};

export default PreviewPage;
