import React from "react";
import CreatedAdvertsTable from "./createdAdvertsTable";
import AdvertTitleArea from "./advertTitleArea";

function MainPage() {
  return (
    <div className="bg-gray-200">
      <AdvertTitleArea />
      <CreatedAdvertsTable />
    </div>
  );
}

export default MainPage;
