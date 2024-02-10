import React, { useState, useEffect } from "react";
import "./balanceModal.css";
import { LuScreenShare } from "react-icons/lu";
import { SlPresent } from "react-icons/sl";
import { CiCircleInfo } from "react-icons/ci";
import AddBalance from "./addBalance";

const BalanceModal = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activePage, setActivePage] = useState(0);

  const renderPage = () => {
    switch (activePage) {
      case 0:
        return <AddBalance />;

      default:
        return null;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const modalClass = isOpen
    ? "fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-600 bg-opacity-50"
    : "hidden";
  return (
    <div className={modalClass}>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="relative mx-auto md:mx-9 px-auto lg:px-5 bg-white rounded-2xl animate__animated animate__fadeInDown w-80 md:w-fit">
          <div>
            <div className="flex flex-col max-w-[1200px] px-3  mx-auto rounded-lg bg-bgWhite">
              <div className="flex flex-col md:flex-row justify-between items-center gap-x-2 lg:gap-x-5 mt-3 md:mt-10 text-xs lg:text-sm">
                {!isMobile && (
                  <div className="flex border-none font-bold p-1 mb-3 md:mb-0 text-sm lg:text-2xl">
                    Bakiye Detay
                  </div>
                )}
                {isMobile && (
                  <div className="flex items-center justify-center relative w-full">
                    <div className="flex border-none font-bold p-1 pt-2 mb-3 md:mb-0 text-sm lg:text-2xl">
                      Bakiye Detay
                    </div>
                    <div
                      className="w-5 h-5 md:w-10 md:h-10 rounded-md p-4 cursor-pointer transition-all duration-700 md:relative  bg-gray-200/50 hover:bg-red-500 group absolute right-2 bottom-2"
                      onClick={onClose}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-txtRed transition-all duration-700 rotate-180 flex absolute group-hover:opacity-0 group-hover:rotate-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        height="30"
                        width="30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-white rotate-0 transition-all duration-700 opacity-0 group-hover:block group-hover:rotate-180 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        height="30"
                        width="30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.5 12.75a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Z"></path>
                      </svg>
                    </div>
                  </div>
                )}
                <div className="flex justify-between items-center px-2. lg:px-5  py-1 lg:py-2 border-2 border-gray-300 rounded-lg mb-3 md:mb-0">
                  <LuScreenShare className="flex items-center me-2 text-lg lg:text-2xl text-premiumOrange" />
                  <span className="flex items-center mx-1 font-bold md:text-md">
                    Reklam Bakiyesi Artırılabilir Tutar:
                    <span className="flex items-center">0₺</span>
                  </span>
                  <CiCircleInfo className="mx-2 text-lg" />
                </div>
                <div className="flex justify-between items-center px-1 lg:px-5 py-1 lg:py-2 border-2     border-gray-300 rounded-lg mb-3 md:mb-0">
                  <span className="mx-2 font-bold">
                    Toplam Reklam Bakiyesi:
                  </span>
                  <span className="flex items-center font-bold">
                    250₺ <CiCircleInfo className="mx-2 text-lg" />
                  </span>
                  <SlPresent className="mx-2 text-lg text-greenDark" />
                  <span className="flex items-center text-greenDark">
                    <span>250₺ </span>
                    <CiCircleInfo className="mx-2 text-greenDark text-lg" />
                  </span>
                </div>

                {!isMobile && (
                  <div
                    className="w-10 h-10 rounded-md p-4 cursor-pointer transition-all duration-700 relative  bg-gray-200/50 hover:bg-red-500 group"
                    onClick={onClose}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="text-txtRed transition-all duration-700 rotate-180 flex absolute group-hover:opacity-0 group-hover:rotate-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                    </svg>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="text-white rotate-0 transition-all duration-700 opacity-0 group-hover:block group-hover:rotate-180 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.5 12.75a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Z"></path>
                    </svg>
                  </div>
                )}
              </div>
              <div className="py-4 lg:py-10">
                <div className="tabs tab-group flex justify-start items-center relative">
                  <button
                    className="tabs px-3 lg:px-10 relative md:text-[1.3vw] lg:text-[1.1vw] xl:text-[0.9vw] text-xs group transition-all duration-300 ease-in-out"
                    onClick={() => setActivePage(0)}
                  >
                    <span
                      className={`bg-left-bottom bg-gradient-to-r hover:text-premiumOrange from-premiumOrange to-txtRed bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out md:text-[1.3vw] lg:text-[1vw] xl:text-[1.1vw]`}
                    >
                      Bakiye Satin Al
                    </span>
                    <span className="absolute left-0 buttom-0 w-0 h-1 bg-premiumOrange transition-all duration-300 hover:w-full"></span>
                  </button>
                  <div className="vertical-line"></div>
                  <button
                    className="tabs px-3 lg:px-10 relative md:text-[1.3vw] lg:text-[1.1vw] xl:text-[0.9vw] text-xs group transition-all duration-300 ease-in-out "
                    onClick={() => setActivePage(1)}
                  >
                    <span className="tabs-text bg-left-bottom bg-gradient-to-r  hover:text-premiumOrange from-premiumOrange to-txtRed bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out md:text-[1.3vw] lg:text-[1vw] xl:text-[1.1vw]">
                      Hediye Bakiye
                    </span>
                    <div
                      className={`inline-block bg-premiumOrange text-white text-[9px] font-bold px-1 py-0 rounded absolute right-1 -top-3`}
                    >
                      YENİ
                    </div>
                  </button>
                  <div className="vertical-line"></div>
                  <button
                    className="tabs px-3 lg:px-10 relative group transition-all duration-300 ease-in-out text-xs"
                    onClick={() => setActivePage(2)}
                  >
                    <span className="bg-left-bottom bg-gradient-to-r  hover:text-premiumOrange from-premiumOrange to-txtRed bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out md:text-[1.3vw] lg:text-[1vw] xl:text-[1.1vw]">
                      Hesap Hareketleri
                    </span>
                  </button>
                </div>
                <div className="border mt-2 lg:mt-4"></div>
              </div>
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceModal;
