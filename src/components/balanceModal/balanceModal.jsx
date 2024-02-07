import React from "react";
import "./balanceModal.css";
import { LuScreenShare } from "react-icons/lu";
import { SlPresent } from "react-icons/sl";
import { CiCircleInfo } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const BalanceModal = ({ isOpen, onClose }) => {
  const modalClass = isOpen
    ? "fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-600 bg-opacity-50"
    : "hidden";
  return (
    <div className={modalClass}>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="relative px-5 bg-white rounded-2xl animate__animated animate__fadeInDown">
          <div>
            <div className="flex flex-col max-w-[1200px] px-3  mx-auto rounded-lg bg-bgWhite">
              <div className="flex flex-col md:flex-row justify-between items-center gap-x-2 lg:gap-x-5 mt-10 text-xs lg:text-sm">
                <div className="flex border-none font-bold p-1 mb-3 md:mb-0 text-sm lg:text-2xl">
                  Bakiye Detay
                </div>
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
                <button
                  className="flex border-2 border-gray-300 rounded-lg mb-3 md:mb-0 p-2"
                  onClick={onClose}
                >
                  <RxCross1 />
                </button>
              </div>
              <div className="py-10">
                <div className="tabs flex justify-start items-center relative">
                  <div className="tabs ps-2 pe-10 relative text-xs md:text-md lg:text-lg">
                    Bakiye Satın Al
                  </div>
                  <div className="vertical-line"></div>
                  <div className="tabs px-10 relative text-xs md:text-md lg:text-lg">
                    Hediye Bakiye
                    <div
                      className={`inline-block bg-premiumOrange text-white text-[9px] font-bold px-1 py-0 rounded absolute  right-1 -top-3`}
                    >
                      YENİ
                    </div>
                  </div>

                  <div className="vertical-line"></div>
                  <div className="tabs px-10 relative text-xs md:text-md lg:text-lg">
                    Hesap Hareketleri
                  </div>
                </div>
                <div className="border mt-4"></div>
              </div>

              <div className="grid grid-cols-3 gap-y-5 gap-x-10 mb-10">
                <div className="border-2 border-borderGray p-1 rounded-lg hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold text-lg">
                  100₺
                </div>
                <div className="border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold text-lg">
                  250₺
                </div>
                <div className="border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold text-lg">
                  500₺
                </div>
                <div className="border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold text-lg">
                  750₺
                </div>
                <div className="border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold text-lg">
                  1000₺
                </div>
                <div className="border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold text-lg">
                  Farklı miktar gir
                </div>
              </div>
              <h4 className="mb-2 font-bold">Ödeme Seçenekleri</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-10">
                <div className="border-2 border-gray-300 p-2 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange cursor-pointer highlight-on-hover font-bold">
                  <input type="radio" className="me-2" name="buy" />
                  Hesaptan Satın Al
                </div>
                <div className="flex border-2 border-gray-300 p-3 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange cursor-pointer highlight-on-hover font-bold relative ">
                  <input type="radio" className="me-2 relative" name="buy" />
                  Kredi Kartı ile Satın Al
                  <div
                    className={`inline-block bg-premiumOrange text-white text-[9px] rounded 
                        p-1 absolute top-1 left-52`}
                  >
                    YENİ
                  </div>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between items-center py-10">
                <div className="flex justify-center items-center ps-2">
                  <input
                    type="checkbox"
                    className="flex items-center justify-center size-7"
                  />
                  <span className="p-2 items-start">
                    Ödeme işlemine devam edimesi halinde tahsil edilen
                    tutarların iadesi mümkün olmayacaktır.İşleme devam ederek bu
                    hususu kabul etmiş sayılacağını kabul ediyorum.
                  </span>
                </div>
                <button
                  className="flex items-center justify-center px-4 py-3 w-48 overflow-hidden text-sm font-bold text-txtWhite bg-premiumOrange border border-5 border-premiumOrange rounded hover:bg-transparent hover:text-premiumOrange focus:outline-none focus:ring"
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
  );
};

export default BalanceModal;
