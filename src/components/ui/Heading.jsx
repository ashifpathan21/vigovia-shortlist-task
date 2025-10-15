import React from "react";

const Heading = ({ title }) => {
  const words = title.trim().split(" ");
  const part1 = words.slice(0, -1).join(" ");
  const part2 = words.at(-1);

  return (
    <h1 className="font-bold text-3xl  capitalize font-sans text-black  ">
      {part1} <span className="text-[#680099]">{part2}</span>
    </h1>
  );
};

export default Heading;
