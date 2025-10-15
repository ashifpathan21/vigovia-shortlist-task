import React from 'react'

const FlexCol = ({heading , data}) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold" >{heading} :</p>
      <p>{data}</p>
    </div>
  );
}

export default FlexCol
