import React from "react";
import Heading from "./ui/Heading.jsx";
import Table from "./ui/Table.jsx";

const ActivityTable = () => {
  const thead = [
    { key: "city", value: "city" },
    { key: "activity", value: "activity" },
    { key: "type", value: "type" },
    { key: "timeRequired", value: "Time Required" },
  ];
  const data = [
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Nature/Sightseeing",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
    {
      city: "Rio de Janeiro",
      activity: "Sydney Harbour Cruise & Taronga  Zoo",
      type: "Airlines Standard ",
      timeRequired: "2-3 Hours",
    },
  ];
  return (
    <div className="flex flex-col gap-6 mb-10 ">
      <Heading title="Activity Table" />
      <Table tableHead={thead} tableData={data} />
    </div>
  );
};

export default ActivityTable;
