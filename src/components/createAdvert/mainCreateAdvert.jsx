import React, { useState } from "react";
import Pages from "./pages";
import CreateAdvertTitleArea from "./createAdvertTitle";
import AdvertInfo from "../advertInfo/advertInfo";

function MainCreateAdvert() {
  const [activePage, setActivePage] = useState(1);

  const handleButtonClick = () => {
    setActivePage((prevActivePage) => (prevActivePage % 3) + 1);
  };

  return (
    <>
      <CreateAdvertTitleArea />
      <div className="bg-white m-5 rounded-lg">
        <div className="block lg:flex">
          <Pages active={activePage} />
          {/* FORUM YERİ GELECEK ALAN (ACTİVE PAGE E GÖRE DEĞİŞECEK ALAN)*/}
          <div>
            <AdvertInfo/>
          </div>
        </div>
        <div className="flex items-center justify-end border-t-2 border-gray-100 text-[3vw] md:text-[1.1vw] lg:text-[1vw] xl:text-[0.8vw]">
          <button
            style={{ marginTop: "24px" }}
            onClick={handleButtonClick}
            className="my-6 mr-5 flex lg:mt-0 items-center justify-center text-center py-2 px-32 text-white bg-premiumOrange border-2 hover:text-premiumOrange border-premiumOrange rounded-lg font-semibold overflow-hidden relative transition-all will-change-transform after:bg-white z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-premiumOrange after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform"
          >
            Devam Et
          </button>
        </div>
      </div>
    </>
  );
}

export default MainCreateAdvert;
