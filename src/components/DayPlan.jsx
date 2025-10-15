import React from "react";
import DayCard from "./DayCard.jsx";
const DayPlan = () => {
  const data = [
    {
      day: 1,
      date: "27th November",
      title: "Arrival in Singapore & City Exploration",
      morningPlan: ["Arrive in Singapore. Transfer from Airport to Hotel."],
      afternoonPlan: [
        "Check into your hotel.",
        "Visit Marina Bay Sands Sky Park (2-3 hours). ",
        "Optional: Stroll along Marina Bay Waterfront Promenade or Helix Bridge.",
      ],
      eveningPlan: [
        "Explore Gardens by the Bay, including Super Tree Grove (3-4 hours)",
      ],
    },
    {
      day: 1,
      date: "27th November",
      title: "Arrival in Singapore & City Exploration",
      morningPlan: ["Arrive in Singapore. Transfer from Airport to Hotel."],
      afternoonPlan: [
        "Check into your hotel.",
        "Visit Marina Bay Sands Sky Park (2-3 hours). ",
        "Optional: Stroll along Marina Bay Waterfront Promenade or Helix Bridge.",
      ],
      eveningPlan: [
        "Explore Gardens by the Bay, including Super Tree Grove (3-4 hours)",
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full  gap-6 ">
      {data?.map((data) => (
        <DayCard key={data?.day} data={data} />
      ))}
    </div>
  );
};

export default DayPlan;
