import React from "react";
import DayX from "./ui/DayX.jsx";
import TripTitle from "./ui/TripTitle.jsx";
import DayTask from "./DayTask.jsx";

const DayCard = ({ data }) => {
  const { day, date, title, morningPlan, afternoonPlan, eveningPlan } = data;
  return (
    <div className="flex  items-center h-full overflow-hidden max-h-[500px] justify-start gap-5 w-full p-2 border-b-0 border-slate-500  ">
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
