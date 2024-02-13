import React, { useState } from "react";

function SelectItemHeader() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="w-full">
      <div className="headerArea py-5">
        <div className="border-b-2 border-gray-100 flex w-full px-5">
          <h1
            className={` cursor-pointer ${
              activeItem === 0
                ? "border-premiumOrange border-b-2 text-premiumOrange font-semibold"
                : "text-gray-600"
            } p-3 `}
            onClick={() => setActiveItem(0)}
          >
            Hizmet Listem
          </h1>
          <h1
            className={` ${
              activeItem === 1
                ? "border-premiumOrange border-b-2 cursor-pointer text-premiumOrange font-semibold"
                : "text-gray-600"
            } p-3 `}
            onClick={() => setActiveItem(1)}
          >
            Seçilen Hizmetler
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SelectItemHeader;
