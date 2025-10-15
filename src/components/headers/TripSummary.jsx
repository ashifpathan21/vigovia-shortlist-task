import React from "react";
import Icon1 from "../../assets/icons/icon1.svg";
import Icon2 from "../../assets/icons/icon2.svg";
import Icon3 from "../../assets/icons/icon3.svg";
import Icon4 from "../../assets/icons/icon4.svg";
import Icon5 from "../../assets/icons/icon5.png";
const TripSummary = ({ name, destination, day }) => {
  const icons = [Icon1, Icon2, Icon3, Icon4, Icon5];
  return (
    <div className=" w-full  p-3 font-sans rounded-xl py-4 text-white bg-gradient-to-r bg-linear-0 from-[#4BA1EB] to-[#936FE0] flex flex-col gap-3 items-center ">
      <h1 className=" text-3xl font-semibold p-1 ">{`Hi, ${name}!`}</h1>
      <h1 className="font-bold text-3xl ">{`${destination} Itenerary`}</h1>
      <h1 className=" text-xl font-semibold ">{`${day} Days ${
        day - 1
      } Nights`}</h1>
      <div className="flex gap-3 ">
        {icons.map((icon, i) => (
          <img
            key={i}
            src={icon}
            className="h-5 w-5 aspect-square object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default TripSummary;
