import React, { useState } from "react";
import Pages from "./pages";
import CreateAdvertTitleArea from "./createAdvertTitle";
import AdvertInfo from "../advertInfo/advertInfo";
import MainSelectItemPage from "../selectItem/mainSelectItemPage";

function MainCreateAdvert() {
  const [activePage, setActivePage] = useState(1);
  const handleButtonClick = () => {
    setActivePage((prevActivePage) => prevActivePage + 1);
  };
  const handleButtonBackClick = () => {
    setActivePage((prevActivePage) => prevActivePage - 1);
  };
  const renderPage = () => {
    switch (activePage) {
      case 1:
        return <AdvertInfo handleButtonClick={handleButtonClick} />;
      case 2:
        return <MainSelectItemPage />;
      default:
        return null;
    }
  };
  return (
    <>
      <CreateAdvertTitleArea />
      <div className="bg-white m-5 rounded-lg">
        <div className="block lg:flex">
          <Pages active={activePage} />
          {renderPage()}
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end border-t-2 border-gray-100 text-[3vw] md:text-[1.1vw] lg:text-[1vw] xl:text-[0.8vw]">
          {activePage > 1 && (
            <button
              style={{ marginTop: "24px" }}
              onClick={handleButtonBackClick}
              className="my-3 mb-0 lg:my-6 lg:mr-5 flex lg:mt-0 items-center justify-center text-center py-2 px-36 text-gray-600 bg-gray-200 border-2 hover:text-white border-gray-200 hover:border-gray-600 rounded-lg font-semibold overflow-hidden relative transition-all will-change-transform after:bg-gray-600 z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-gray-200 after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform"
            >
              Geri
            </button>
          )}
          {activePage < 3 && (
            <button
              style={{ marginTop: "24px" }}
              onClick={handleButtonClick}
              className="mb-3 lg:my-6 lg:mr-5 flex lg:mt-0 items-center justify-center text-center py-2 px-32 text-white bg-premiumOrange border-2 hover:text-premiumOrange border-premiumOrange rounded-lg font-semibold overflow-hidden relative transition-all will-change-transform after:bg-white z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-premiumOrange after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform"
            >
              Devam Et
            </button>
          )}
          {activePage === 3 && (
            <button
              style={{ marginTop: "24px" }}
              className="my-3 lg:my-6 lg:mr-5 flex lg:mt-0 items-center justify-center text-center py-2 px-36 text-white bg-premiumOrange border-2 hover:text-premiumOrange border-premiumOrange rounded-lg font-semibold overflow-hidden relative transition-all will-change-transform after:bg-white z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-premiumOrange after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform"
            >
              Bitir
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default MainCreateAdvert;
