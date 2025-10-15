import React from "react";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className=" flex w-full gap-10 py-10 my-10 items-center justify-around ">
      <div className="flex flex-col max-w-[200px] gap-2 ">
        <h1 className="font-bold ">Vigovia tech pvt. ltd</h1>
        <p>
          Registered Office: Hd-109 Cinnabar Hills, Links Business Park,
          Karnataka, India.
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <h1 className="font-semibold text-md ">
          Phone: <span className="font-light ">+91-9504061112</span>
        </h1>
        <h1 className="font-semibold text-md ">
          Email ID:
          <span className="font-light "> utkarsh@vigovia.com</span>
        </h1>
        <h1 className="font-semibold text-md ">
          CIN: <span className="font-light ">U79110KA2024PTC191890</span>
        </h1>
      </div>
      <div>
        <img src={Logo} className="w-[231px] h-[113px] object-contain " />
      </div>
    </div>
  );
};

export default Footer;
