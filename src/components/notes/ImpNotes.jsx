import React from "react";
import Heading from "../ui/Heading.jsx";
import Table from "../ui/Table.jsx";
const ImpNotes = ({
  notes = [
    {
      point: "Airlines Standard Policy",
      details:
        "In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any  cost.",
    },
    {
      point: "Hotel Check-In & Check Out",
      details:
        "In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any  cost.",
    },
    {
      point: "Visa Rejection",
      details:
        "In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any  cost.",
    },
    {
      point: "Flight/Hotel Cancellation",
      details:
        "In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any  cost.",
    },
    {
      point: "trip Insurance",
      details:
        "In case of visa rejection, visa fees or any other non cancellable component cannot be reimbursed at any  cost.",
    },
  ],
}) => {
  const thead = [
    { key: "point", value: "Point" },
    { key: "details", value: "details" },
  ];
  return (
    <div className="flex flex-col gap-6 mb-10 ">
      <Heading title={"Important Notes"} />

      <Table tableHead={thead} tableData={notes} />
    </div>
  );
};

export default ImpNotes;
