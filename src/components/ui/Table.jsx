import React from "react";

const Table = ({ tableHead, tableData }) => {
  return (
    <table className=" border-separate border-spacing-x-2 capitalize  gap-10  w-full">
      <colgroup>
        {tableHead?.map((col) => (
          <col key={col?.key} className="bg-[#F9EEFF] " />
        ))}
      </colgroup>
      <thead className="">
        <tr>
          {tableHead.map((key) => (
            <th
              className="bg-[#321E5D] font-bold text-center  text-white p-3 rounded-t-4xl "
              key={key.key}
            >
              {key.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, i) => (
          <tr className="my-2" key={i}>
            {tableHead.map((key) => (
              <td
                className={` text-center font-light  p-4  ${
                  i === tableData?.length - 1 ? "pb-7 rounded-b-4xl" : ""
                }`}
                key={key?.key}
              >
                {row[key?.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
