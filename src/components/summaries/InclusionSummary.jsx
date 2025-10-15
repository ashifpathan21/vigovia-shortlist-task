import React from "react";
import Heading from "../ui/Heading.jsx";
import Table from "../ui/Table.jsx";

const InclusionSummary = ({
  data = [
    {
      category: "flight",
      count: "2",
      details: "All flights mentioned",
      status: "Awaiting  Confirmation",
    },
    {
      category: "tourist tax",
      count: "2",
      details:
        "Yotel (Singapore), Oakwood (Sydney), Mercure (Cairns),  Novotel (Gold Coast), Holiday Inn (Melbourne)",
      status: "Awaiting  Confirmation",
    },
    {
      category: "hotel",
      count: "2",
      details: "Airport to Hotel - Hotel to Attractions - Day trips if any",
      status: "included",
    },
  ],
}) => {
  const thead = [
    { key: "category", value: "category" },
    { key: "count", value: "count" },
    { key: "details", value: "details" },
    { key: "status", value: "status / comments" },
  ];

  return (
    <div className="flex flex-col gap-6 mb-10 ">
      <Heading title={"Inclusion Summary"} />
      <Table tableHead={thead} tableData={data} />
      <div>
        <h2 className="font-medium text-md">
          Transfer Policy(Refundable Upon Claim)
        </h2>
        <p className="text-sm font-light">
          If any transfer is delayed beyond 15 minutes, customers may book an
          app-based or radio taxi and claim a refund for that specific leg.
        </p>
      </div>
    </div>
  );
};

export default InclusionSummary;
