import React from "react";
import LogoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="p-3 ">
      <img
        className="  object-contain h-[130px] w-[265px] "
        src={LogoImage}
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
