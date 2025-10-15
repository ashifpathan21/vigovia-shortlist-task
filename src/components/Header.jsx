import React from "react";
import Logo from "./ui/Logo.jsx";
import TripSummary from "./TripSummary.jsx";
const Header = ({ name = "Rahul", destination = "Singapore", day = 4 }) => {
  return (
      <div className="flex capitalize flex-col items-center w-full ">
        <Logo />
        <TripSummary name={name} destination={destination} day={day} />
      </div>
  );
};

export default Header;
