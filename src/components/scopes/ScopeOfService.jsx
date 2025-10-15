import React from "react";
import Heading from "../ui/Heading.jsx";
import Table from "../ui/Table.jsx";
const ScopeOfService = ({
  scope = [
    {
      service: "Flight tickets and hotel vouchers",
      details: "Delivered 3 days post full payment ",
    },
    {
      service: "Web Check-In",
      details: "Boarding pass delivery via Email/WhatsApp",
    },
    { service: "Support", details: "Chat support – Response time: 4 hours" },
    { service: "Cancellation Support", details: "Provided" },
    { service: "Trip Support", details: "Response time: 5 minutes" },
  ],
}) => {
  const thead = [
    { key: "scope", value: "service" },
    { key: "details", value: "details" },
  ];

  return (
    <div className="flex flex-col gap-6 mb-10 ">
      <Heading title={"Scope of Service"} />

      <Table tableHead={thead} tableData={scope} />
    </div>
  );
};

export default ScopeOfService;
