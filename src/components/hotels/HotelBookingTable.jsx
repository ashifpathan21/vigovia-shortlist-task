import React from "react";
import Table from "../ui/Table.jsx";

const HotelBookingTable = ({ data }) => {
  const thead = [
    { key: "city", value: "City" },
    { key: "checkIn", value: "Check in " },
    { key: "checkOut", value: "Check Out" },
    { key: "nights", value: "Nights" },
    { key: "hotelName", value: "Hotel Name" },
  ];
  return (
    <div className="my-5  ">
      <Table tableHead={thead} tableData={data} />
    </div>
  );
};

export default HotelBookingTable;
