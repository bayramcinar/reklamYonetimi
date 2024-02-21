import React, { useState, useEffect } from "react";
import announcement from "../../img/announcement.png";
import star from "../../img/star.png";
import increase from "../../img/increase.png";
import trolley from "../../img/trolley.png";
import arrow from "../../img/right-arrow.png";
import arrowDown from "../../img/down-arrow.png";
import IconComponent from "./iconComponent";
import AdvertTypes from "../advertTypes/advertTypes";

function WhyUseAdvert() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const [isScreenSizeLessThan1024, setIsScreenSizeLessThan1024] = useState(
    window.innerWidth < 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeLessThan1024(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="bg-white rounded-lg mx-5 my-8">
        <div className="titleArea p-6">
          <div className="flex flex-col lg:flex-row justify-center items-start">
            <div className="flex-col ml-auto pl-0 md:pl-12 lg:pl-32 ">
              <h1 className=" font-extrabold lg:text-[1.8vw] xl:text-[1.7vw] text-center text-gray-700">
                Neden Reklam Vermeliyim ?
              </h1>
              <h1 className="lg:text-[1.1vw] xl:text-[1vw] text-center mt-2 font-semibold text-gray-600">
                Reklam vererek kullanıcı etkileşiminizi arttırabilir bu sayede
                kazancınızda artış sağlayabilirsiniz!
              </h1>
            </div>
            <div className="flex-col mx-auto lg:mx-0 lg:ml-auto lg:text-[1vw] xl:text-[0.9vw] text-sm mt-3 lg:mt-0">
              <button
                type="button"
                onClick={openModal}
                className=" bg-premiumOrangeBG2 text-premiumOrange py-2 px-3 rounded-lg font-semibold "
              >
                <i class="fa-solid fa-circle-info mr-2 my-auto"></i>
                Reklam İpuçları
              </button>
            </div>
          </div>

          <div className="iconArea block lg:flex justify-around my-8 flex-wrap">
            <IconComponent icon={announcement} text={"Reklam Verin !"} />
            {!isScreenSizeLessThan1024 && (
              <img
                src={arrow}
                className="my-auto w-[10.5vw] h-[10.5vw] md:w-[8.5vw] md:h-[8.5vw] xl:w-[5vw] xl:h-[5vw] lg:w-[7.5vw] lg:h-[7.5vw] mx-auto"
                alt=""
              />
            )}
            {isScreenSizeLessThan1024 && (
              <img
                src={arrowDown}
                className="my-4 w-[10.5vw] h-[10.5vw] md:w-[8.5vw] md:h-[8.5vw] xl:w-[6.5vw] xl:h-[6.5vw] lg:w-[7.5vw] lg:h-[7.5vw] mx-auto"
                alt=""
              />
            )}
            <IconComponent icon={star} text={"Profilinizi Öne Çıkarın !"} />
            {!isScreenSizeLessThan1024 && (
              <img
                src={arrow}
                className="my-auto w-[10.5vw] h-[10.5vw] md:w-[8.5vw] md:h-[8.5vw] xl:w-[5vw] xl:h-[5vw] lg:w-[7.5vw] lg:h-[7.5vw] mx-auto"
                alt=""
              />
            )}
            {isScreenSizeLessThan1024 && (
              <img
                src={arrowDown}
                className="my-4 w-[10.5vw] h-[10.5vw] md:w-[8.5vw] md:h-[8.5vw] xl:w-[6.5vw] xl:h-[6.5vw] lg:w-[7.5vw] lg:h-[7.5vw] mx-auto"
                alt=""
              />
            )}
            <IconComponent icon={increase} text={"Etkileşiminizi Arttırın !"} />
            {!isScreenSizeLessThan1024 && (
              <img
                src={arrow}
                className="my-auto w-[10.5vw] h-[10.5vw] md:w-[8.5vw] md:h-[8.5vw] xl:w-[5vw] xl:h-[5vw] lg:w-[7.5vw] lg:h-[7.5vw] mx-auto"
                alt=""
              />
            )}
            {isScreenSizeLessThan1024 && (
              <img
                src={arrowDown}
                className="my-4 w-[10.5vw] h-[10.5vw] md:w-[8.5vw] md:h-[8.5vw] xl:w-[6.5vw] xl:h-[6.5vw] lg:w-[7.5vw] lg:h-[7.5vw] mx-auto"
                alt=""
              />
            )}
            <IconComponent icon={trolley} text={"Ve Daha Fazla kazanın !"} />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <AdvertTypes
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default WhyUseAdvert;
