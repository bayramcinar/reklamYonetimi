import React, { useEffect, useState } from 'react'
import contents from "./contentData";
import img1 from "../../img/plan1.png";
import img2 from "../../img/plan2.png";
import img3 from "../../img/plan3.png";

const AdvertTypes = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activePage, setActivePage] = useState(0);
  const [activeLink, setActiveLink] = useState(1);

  const handleClick = (linkId) => {
    setActiveLink(linkId);
  }

  const handleAdvertTypeClick = (pageIndex) => {
    setActivePage(pageIndex);
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
                    Reklam Tipleri
                  </div>
                )}
                {isMobile && (
                  <div className="flex items-center justify-center relative w-full">
                    <div className="flex border-none font-bold p-1 pt-2 mb-3 md:mb-0 text-sm lg:text-2xl">
                      Reklam Tipleri
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
                    onClick={() => handleClick(1)}
                  >
                    <span
                      className={`bg-left-bottom bg-gradient-to-r hover:text-premiumOrange from-premiumOrange to-txtRed bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out md:text-[1.3vw] lg:text-[1vw] xl:text-[1.1vw]`}
                    >
                      Gönderi Reklamı
                    </span>
                    <span className="absolute left-0 buttom-0 w-0 h-1 bg-premiumOrange transition-all duration-300 hover:w-full"></span>
                  </button>
                  <div className="vertical-line"></div>
                  <button
                    className="tabs px-3 lg:px-10 relative md:text-[1.3vw] lg:text-[1.1vw] xl:text-[0.9vw] text-xs group transition-all duration-300 ease-in-out "
                    onClick={() => handleClick(2)}
                  >
                    <span className="tabs-text bg-left-bottom bg-gradient-to-r  hover:text-premiumOrange from-premiumOrange to-txtRed bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out md:text-[1.3vw] lg:text-[1vw] xl:text-[1.1vw]">
                      Profil Reklamı
                    </span>
                  </button>
                  <div className="vertical-line"></div>
                  <button
                    className="tabs px-3 lg:px-10 relative group transition-all duration-300 ease-in-out text-xs"
                    onClick={() => handleClick(3)}
                  >
                    <span className="bg-left-bottom bg-gradient-to-r  hover:text-premiumOrange from-premiumOrange to-txtRed bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out md:text-[1.3vw] lg:text-[1vw] xl:text-[1.1vw]">
                      Genel Reklam
                    </span>
                  </button>
                </div>

                <div className="border mt-2 lg:mt-4"></div>
              </div>
              <div className="flex-col">
                {activeLink === 1 && (
                  // h-[18rem] w-36 md:w-64 lg:w-96
                  <div className="flex-col lg:flex lg:flex-row justify-center items-center  px-3 pb-5 gap-10">
                    <div className="flex-col border rounded-lg mb-5 lg:mb-0">
                      <div className='p-3'>
                        <div className='flex flex-1'>
                          <img className='w-[20.5vw] h-[20.5vw] md:w-[18vw] md:h-[18vw]
                           lg:w-[26vw] lg:h-[26vw] xl:w-[22vw] xl:h-[19.5vw] mx-auto object-cover' src={img1} alt="gönderi reklamı"/>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col  border rounded-lg bg-lightGray">
                      <div className='p-3 text-sm md:text-md lg:text-lg'>
                        <h3 className='font-bold text-lg'>Nedir?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, libero?</p>
                        <h3 className='font-bold text-lg'>Neden Kullanılmalıdır?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, odit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, voluptatem.</p>
                        <h3 className='font-bold text-lg'>Nerede Yayınlanır</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatem, expedita laboriosam quasi ex ab repellat debitis deserunt inventore in!</p>
                        <h3 className='font-bold text-lg'>ipucu</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis dolores quasi fuga, quo illo!</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeLink === 2 && (
                  <div className="flex-col lg:flex lg:flex-row justify-center items-center  px-3 pb-5 gap-10">
                  <div className="flex-col border rounded-lg mb-5 lg:mb-0">
                    <div className='p-3'>
                      <div className='flex flex-1'>
                        <img className='w-[20.5vw] h-[20.5vw] md:w-[18vw] md:h-[18vw]
                         lg:w-[26vw] lg:h-[26vw] xl:w-[22vw] xl:h-[19.5vw] mx-auto object-cover' src={img2} alt="gönderi reklamı"/>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col  border rounded-lg bg-lightGray">
                    <div className='p-3 text-sm md:text-md lg:text-lg'>
                      <h3 className='font-bold text-lg'>Nedir?</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, libero?</p>
                      <h3 className='font-bold text-lg'>Neden Kullanılmalıdır?</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, odit.</p>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, voluptatem.</p>
                      <h3 className='font-bold text-lg'>Nerede Yayınlanır</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatem, expedita laboriosam quasi ex ab repellat debitis deserunt inventore in!</p>
                      <h3 className='font-bold text-lg'>ipucu</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis dolores quasi fuga, quo illo!</p>
                    </div>
                  </div>
                </div>
                )}
                {activeLink === 3 && (
                   <div className="flex-col lg:flex lg:flex-row justify-center items-center  px-3 pb-5 gap-10">
                   <div className="flex-col border rounded-lg mb-5 lg:mb-0">
                     <div className='p-3'>
                       <div className='flex flex-1'>
                         <img className='w-[20.5vw] h-[20.5vw] md:w-[18vw] md:h-[18vw]
                          lg:w-[26vw] lg:h-[26vw] xl:w-[22vw] xl:h-[19.5vw] mx-auto object-cover' src={img3} alt="gönderi reklamı"/>
                       </div>
                     </div>
                   </div>
                   <div className="flex-col  border rounded-lg bg-lightGray">
                     <div className='p-3 text-sm md:text-md lg:text-lg'>
                       <h3 className='font-bold text-lg'>Nedir?</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, libero?</p>
                       <h3 className='font-bold text-lg'>Neden Kullanılmalıdır?</h3>
                       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, odit.</p>
                       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, voluptatem.</p>
                       <h3 className='font-bold text-lg'>Nerede Yayınlanır</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatem, expedita laboriosam quasi ex ab repellat debitis deserunt inventore in!</p>
                       <h3 className='font-bold text-lg'>ipucu</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis dolores quasi fuga, quo illo!</p>
                     </div>
                   </div>
                 </div>
                )}
              </div>
              <div className="flex-col">
                <div className="flex justify-center items-center">
                  <button
                    value="Submit"
                    type="submit"
                    className="mb-3 lg:my-5 lg:mr-5 flex lg:mt-0 items-center justify-center text-center py-2 px-14 text-white bg-premiumOrange border-2 hover:text-premiumOrange border-premiumOrange rounded-lg font-semibold overflow-hidden relative transition-all will-change-transform after:bg-white z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-premiumOrange after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform text-[3vw] md:text-[1.1vw] lg:text-[1vw] xl:text-[0.8vw]"
                  >
                    Reklam Tipini Seç
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {renderPage()} */}
    </div>
  );
};

export default AdvertTypes