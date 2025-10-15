import React from "react";
import Img1 from "../../assets/placeImage/img1.jpg";
import Img2 from "../../assets/placeImage/img2.jpg";
import Img3 from "../../assets/placeImage/img3.jpg";
import Img4 from "../../assets/placeImage/img4.jpg";
const TripTitle = ({ day, date, title }) => {
  const images = [Img1, Img2, Img3, Img4];
  return (
    <div className="flex flex-col gap-4 items-center max-w-[250px] w-full justify-center ">
      <img
        src={images[day % 4]}
        className="h-[216px] w-[216px] aspect-square rounded-full object-cover"
      />
      <h1 className="font-bold text-xl ">{date}</h1>
      <h1 className="text-lg">{title}</h1>
    </div>
  );
};

export default TripTitle;
