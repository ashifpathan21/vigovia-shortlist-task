import React from "react";
import Task from "../ui/Task.jsx";
const DayTask = ({ morningPlan, afternoonPlan, eveningPlan }) => {
  return (
    <div className="p-3 gap-4  rounder-xl border-l-6 border-[#2F80ED] flex-col flex justify-center  items-center ">
      {morningPlan.length && <Task title="Morning" data={morningPlan} />}
      {afternoonPlan.length && <Task title="Afternoon" data={afternoonPlan} />}
      {eveningPlan.length && <Task title="Evening" data={eveningPlan} />}
    </div>
  );
};

export default DayTask;
