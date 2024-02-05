import React from "react";
import CreatedAdvertsTable from "./createdAdvertsTable";
import AdvertTitleArea from "./advertTitleArea";
import WhyUseAdvert from "./whyUseAdvert";

function MainPage() {
  return (
    <div className="bg-gray-200">
      <AdvertTitleArea />
      <WhyUseAdvert />
      <CreatedAdvertsTable />
    </div>
  );
}

export default MainPage;
