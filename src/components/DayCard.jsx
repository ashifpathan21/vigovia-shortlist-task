import React from "react";
import DayX from "./ui/DayX.jsx";
import TripTitle from "./ui/TripTitle.jsx";
import DayTask from "./DayTask.jsx";

const DayCard = ({ data }) => {
  const { day, date, title, morningPlan, afternoonPlan, eveningPlan } = data;
  return (
    <div className="flex  items-center h-full overflow-hidden py-2   justify-between gap-2 md:gap-5 lg:gap-7  border-b-1 border-slate-500  ">
      <DayX day={day} />
      <TripTitle day={day} date={date} title={title} />
      <DayTask
        morningPlan={morningPlan}
        afternoonPlan={afternoonPlan}
        eveningPlan={eveningPlan}
      />
    </div>
  );
};

export default DayCard;
