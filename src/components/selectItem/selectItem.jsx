import React from "react";

function SelectItemHeader() {
  return (
    <div className="w-full">
      <div className="headerArea py-5">
        <div className="border-b-2 border-gray-100 flex w-full px-5">
          <h1
            className={` cursor-pointer 
              border-premiumOrange border-b-2 text-premiumOrange font-semibold
             p-3 `}
          >
            Hizmet Listem
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SelectItemHeader;
