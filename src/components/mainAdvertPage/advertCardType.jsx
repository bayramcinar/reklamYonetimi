import React from "react";

function AdvertCardType({
  name,
  budget,
  type,
  viewNumber,
  clickNumber,
  sellNumber,
  ciro,
  status,
  start,
  end,
}) {
  return (
    <div className="max-w-[350px]">
      <div className="nameArea">
        <h1>{name}</h1>
      </div>
      <div className="dateArea">
        <h1>
          {start} - {end}
        </h1>
      </div>
      <div className="otherInfos">
        <div className="flex">
          <div>
            <h1>{budget}</h1>
          </div>
          <div>
            <h1>{type}</h1>
          </div>
        </div>
        <div className="flex">
          <div>
            <h1>{viewNumber}</h1>
          </div>
          <div>
            <h1>{clickNumber}</h1>
          </div>
        </div>
        <div className="flex">
          <div>
            <h1>{sellNumber}</h1>
          </div>
          <div>
            <h1>{ciro}</h1>
          </div>
        </div>
      </div>
      <div>
        <h1>{status}</h1>
      </div>
    </div>
  );
}

export default AdvertCardType;
