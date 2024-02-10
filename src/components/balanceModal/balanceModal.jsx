import React, { useState, useEffect } from "react";
import "./balanceModal.css";
import { LuScreenShare } from "react-icons/lu";
import { SlPresent } from "react-icons/sl";
import { CiCircleInfo } from "react-icons/ci";

const BalanceModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState(null);
  const [farkliMiktar, setFarkliMiktar] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [activePage, setActivePage] = useState(null);

  console.log("amount", amount);
  console.log("farkliMiktar", farkliMiktar);
  console.log("selectedAmount", selectedAmount)
  console.log("activePage",activePage);

  const handleAmount = (miktar) => {
    setAmount(miktar);
  };
  const handleAmountChange = (e) => {
    setFarkliMiktar(e.target.value);
  };

  const handleSelectedAmount = (amount) => {
    setSelectedAmount(selectedAmount === amount ? null : amount);
  }
  const handleActivePage=(value)=>{
    setActivePage(value);
  }

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
      <div className="absolute w-full h-full md:flex items-center justify-center">
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
                <div className="flex items-center justify-between px-5 py-2 border-2 border-gray-300 p-1 rounded-lg mb-3 md:mb-0">
                  <LuScreenShare className=" mx-2 text-2xl text-premiumOrange" />
                  <span className="flex mx-1 font-bold md:text-md">
                    Reklam Bakiyesi Artırılabilir Tutar:
                    <span className="">0₺</span>
                  </span>
                  <CiCircleInfo />
                </div>
                <div className="flex justify-between items-center border-2 px-5 py-2 border-gray-300 p-1 rounded-lg mb-3 md:mb-0">
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
              <div className="py-5 lg:py-10">
                <div className="tabs tab-group flex justify-start items-center relative">
                  <button className="tabs ps-2 pe-10 relative md:text-[1.3vw] lg:text-[1.1vw] xl:text-[0.9vw] text-xs group transition-all duration-300 ease-in-out" onClick={()=>handleActivePage(1)}>
                    <span className={`bg-left-bottom bg-gradient-to-r hover:text-premiumOrange from-premiumOrange to-txtRed bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out md:text-[1.3vw] lg:text-[1vw] xl:text-[1.1vw]`} >
                      Bakiye Satın Al
                    </span>
                    <span className="absolute left-0 buttom-0 w-0 h-1 bg-premiumOrange transition-all duration-300 hover:w-full"></span>
                  </button>
                  <div className="vertical-line"></div>
                  <button className="tabs px-10 relative md:text-[1.3vw] lg:text-[1.1vw] xl:text-[0.9vw] text-xs group transition-all duration-300 ease-in-out " onClick={()=>handleActivePage(2)}>
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
                  <button className="tabs px-10 relative group transition-all duration-300 ease-in-out text-xs" onClick={()=>handleActivePage(3)}>
                    <span className="bg-left-bottom bg-gradient-to-r  hover:text-premiumOrange from-premiumOrange to-txtRed bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out md:text-[1.3vw] lg:text-[1vw] xl:text-[1.1vw]">
                      Hesap Hareketleri
                    </span>
                  </button>
                </div>
                <div className="border mt-2 lg:mt-4"></div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3  gap-y-5 gap-x-10 mb-5 lg:mb-10">
                <button
                  className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500 ${selectedAmount === 100 ? 'bg-bgOrange border-b-premiumOrange' : 'bg-transparent'}`}
                  onClick={() => { handleAmount(100); handleSelectedAmount(100) }}
                >
                  100₺
                </button>
                <button
                  className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500 ${selectedAmount === 250 ? 'bg-bgOrange border-b-premiumOrange' : 'bg-transparent'}`}
                  onClick={() => { handleAmount(250); handleSelectedAmount(250) }}
                >
                  250₺
                </button>
                <button
                  className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500 ${selectedAmount === 500 ? 'bg-bgOrange border-b-premiumOrange' : 'bg-transparent'}`}
                  onClick={() => { handleAmount(500); handleSelectedAmount(500) }}
                >
                  500₺
                </button>
                <button
                  className={`border-2 border-borderGray p-1 rounded-lg   hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500 ${selectedAmount === 750 ? 'bg-bgOrange border-b-premiumOrange' : 'bg-transparent '}`}
                  onClick={() => { handleAmount(750); handleSelectedAmount(750) }}
                >
                  750₺
                </button>
                <button
                  className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500 ${selectedAmount === 1000 ? 'bg-bgOrange border-b-premiumOrange' : 'bg-transparent'}`}
                  onClick={() => { handleAmount(1000); handleSelectedAmount(1000) }}
                >
                  1000₺
                </button>
                <input
                  type="number"
                  placeholder="Farklı miktar gir"
                  className={`placeholder:text-sm border-2   p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500  focus:border-red- ${selectedAmount === farkliMiktar ? 'bg-bgOrange border-premiumOrange' : 'bg-transparent border-borderGrey'} `}
                  value={farkliMiktar}
                  onChange={handleAmountChange}
                  onClick={() => handleSelectedAmount(farkliMiktar)}
                />
              </div>
              <h4 className="mb-2 font-bold">Ödeme Seçenekleri</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 lg:gap-y-5 mb-5 lg:mb-10 md:text-[1.1vw] lg:text-[1vw] xl:text-[0.9vw] text-xs">
                <div className="flex border-2 border-gray-300 p-2 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange cursor-pointer highlight-on-hover font-bold">
                  <input
                    type="radio"
                    className="me-2 md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw]"
                    name="buy"
                  />
                  Hesaptan Satın Al
                </div>
                <div className="flex border-2 border-gray-300 p-2 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange cursor-pointer highlight-on-hover font-bold relative ">
                  <input
                    type="radio"
                    className="me-2 relative md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] text-xs "
                    name="buy"
                  />
                  Kredi Kartı ile Satın Al
                  <div
                    className={`inline-block bg-premiumOrange text-white text-[9px] rounded 
                        p-1 absolute top-1 left-56`}
                  >
                    YENİ
                  </div>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex flex-col md:flex-row items-center justify-between  py-3 lg:py-10">
                <div className="flex justify-center items-center ps-2">
                  <input
                    type="checkbox"
                    className="flex items-center justify-center size-5"
                  />
                  <span className="p-2 items-start md:text-[1.1vw] lg:text-[1vw] xl:text-[0.8vw] text-xs">
                    Ödeme işlemine devam edimesi halinde tahsil edilen
                    tutarların iadesi mümkün olmayacaktır.İşleme devam ederek bu
                    hususu kabul etmiş sayılacağını kabul ediyorum.
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="flex items-center justify-center px-4 py-3 w-48 overflow-hidden text-xs md:text-[1.1vw] lg:text-[1vw] xl:text-[0.9vw] font-bold text-txtWhite bg-premiumOrange border border-5 border-premiumOrange rounded hover:bg-transparent hover:text-premiumOrange focus:outline-none"
                    href="/satınal"
                  >
                    Satın Al
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceModal;
