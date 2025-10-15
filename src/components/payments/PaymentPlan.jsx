import React from "react";
import Heading from "../ui/Heading.jsx";
import ArrowCart from "../ui/ArrowCart.jsx";
import Table from "../ui/Table.jsx";
const PaymentPlan = () => {
  const data = {
    totalAmount: "₹ 9,00,000 ",
    totalAmountDesc: "for 3 pax (inclusive of GST)",
    tcsStatus: "Not Collected",
  };
  const thead = [
    { key: "installment", value: "installment" },
    { key: "amount", value: "amount" },
    { key: "dueDate", value: "due date" },
  ];
  const tdata = [
    {
      installment: "installment 1",
      amount: "₹3,50,000",
      dueDate: "Initial Payment",
    },
    {
      installment: "installment 1",
      amount: " ₹4,00,000",
      dueDate: "Post Visa Approval ",
    },
    {
      installment: "installment 1",
      amount: "Remaining",
      dueDate: "20 Days Before Departure",
    },
  ];
  return (
    <div className="flex flex-col gap-6 mb-10 ">
      <Heading title="Payment Plan" />
      <ArrowCart
        heading="total amount"
        title={data.totalAmount}
        description={data.totalAmountDesc}
      />
      <ArrowCart heading="TCS" title={data.tcsStatus} />
      <Table tableHead={thead} tableData={tdata} />
    </div>
  );
};

export default PaymentPlan;
