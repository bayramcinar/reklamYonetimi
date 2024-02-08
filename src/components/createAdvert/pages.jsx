import React from "react";

function Pages({ active }) {
  return (
    <div className=" w-72 lg:h-[700px] p-8 border-b-2 lg:border-r-2 lg:border-b-0 border-gray-100">
      <div className="firstOne flex md:text-[1.4vw] lg:text-[1.2vw] xl:text-[0.95vw] text-md animate__animated animate__zoomIn">
        <span
          className={`xl:w-[2.5vw] xl:h-[2.5vw] lg:w-[3.2vw] lg:h-[3.2vw] md:w-[3.7vw] md:h-[3.7vw] w-[8.8vw] h-[8.8vw] ${
            active === 1
              ? "bg-premiumOrange  text-white"
              : "bg-white border-2 border-gray-400 text-gray-400"
          } mr-3 rounded-full text-center font-semibold flex items-center justify-center transition-all duration-500`}
        >
          1
        </span>
        <h1
          className={`font-semibold flex items-center justify-center ${
            active === 1 ? " text-premiumOrange" : " text-gray-400"
          } transition-all duration-500`}
        >
          Reklam Bilgileri
        </h1>
      </div>
      <div className="flex items-center justify-start ml-4 lg:ml-6 my-2 animate__animated animate__zoomIn">
        <span className="w-[2px] h-[10vw] lg:h-[5vw] bg-gray-300"></span>
      </div>
      <div className="secondOne flex md:text-[1.4vw] lg:text-[1.2vw] xl:text-[0.95vw] text-md animate__animated animate__zoomIn">
        <span
          className={`xl:w-[2.5vw] xl:h-[2.5vw] lg:w-[3.2vw] lg:h-[3.2vw] md:w-[3.7vw] md:h-[3.7vw] w-[8.8vw] h-[8.8vw] ${
            active === 2
              ? "bg-premiumOrange  text-white"
              : "bg-white border-2 border-gray-400 text-gray-400"
          } mr-3 rounded-full text-center font-semibold flex items-center justify-center transition-all duration-500`}
        >
          2
        </span>
        <h1
          className={`font-semibold flex items-center justify-center ${
            active === 2 ? " text-premiumOrange" : " text-gray-400"
          } transition-all duration-500`}
        >
          İçerik Seçimi
        </h1>
      </div>
      <div className="flex items-center justify-start ml-4 lg:ml-6 my-2 animate__animated animate__zoomIn">
        <span className="w-[2px] h-[10vw] lg:h-[5vw] bg-gray-300"></span>
      </div>
      <div className="thirdOne flex md:text-[1.4vw] lg:text-[1.2vw] xl:text-[0.95vw] text-md animate__animated animate__zoomIn">
        <span
          className={`xl:w-[2.5vw] xl:h-[2.5vw] lg:w-[3.2vw] lg:h-[3.2vw] md:w-[3.7vw] md:h-[3.7vw] w-[8.8vw] h-[8.8vw] ${
            active === 3
              ? "bg-premiumOrange  text-white"
              : "bg-white border-2 border-gray-400 text-gray-400"
          } mr-3 rounded-full text-center font-semibold flex items-center justify-center transition-all duration-500`}
        >
          3
        </span>
        <h1
          className={`font-semibold flex items-center justify-center ${
            active === 3 ? " text-premiumOrange" : " text-gray-400"
          } transition-all duration-500`}
        >
          Onay
        </h1>
      </div>
    </div>
  );
}

export default Pages;