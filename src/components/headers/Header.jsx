import React from "react";
import Logo from "../ui/Logo.jsx";
import TripSummary from "./TripSummary.jsx";

const Header = ({ data }) => {
  const {
    name = "Rahul",
    destination,
    arrivalDate,
    departureDate,
  } = data || {};

  // ---- calculate total trip duration in days ----
  const getDaysBetween = (start, end) => {
    if (!start || !end) return 0;
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = endDate - startDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const day = getDaysBetween(departureDate, arrivalDate);

  return (
    <div className="flex flex-col items-center w-full capitalize">
      <Logo />
      <TripSummary name={name} destination={destination} day={day} />
    </div>
  );
};

export default Header;
