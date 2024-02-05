import React from "react";

function AdvertTitleArea() {
  const OpenWalletModal = () => {
    //BAKİYE MODALINI AÇACAK FONKSİYON
  };

  return (
    <div className="lg:flex m-5">
      <div className="titleArea flex items-center lg:justify-start justify-center my-4 lg:my-0 lg:w-1/4">
        <h1 className="md:text-[1.8vw] lg:text-[1.6vw] xl:text-[1.2vw] font-extrabold text-center">
          Reklam Yönetimi
        </h1>
      </div>
      <div className="announcmentArea flex bg-white rounded-lg px-5 lg:px-10 my-4 lg:my-0 py-3 lg:py-5 justify-between mr-5 w-full">
        <i className="fa-solid fa-bullhorn text-[6vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.8vw] text-premiumOrange mr-2 lg:mr-4 flex items-center justify-center"></i>
        <h1 className="md:text-[1.3vw] text-[3vw] lg:text-[1.1vw] xl:text-[0.9vw] flex items-center justify-center font-medium">
          Çok satan ürünlerin dahil edildiği reklamlar daha iyi performans
          göstermektedir.
        </h1>
        <div className="pagesArea flex items-center justify-center lg:ml-4 font-semibold text-[2.5vw] md:text-[1.3vw] lg:text-[1.1vw] xl:text-[0.9vw] max-[768px]:w-1/4 ">
          <i className="fa-solid fa-chevron-left mr-1 "></i>
          <h1 className=" text-premiumOrange mr-1">3</h1>
          <h1 className=" "> / 10</h1>
          <i className="fa-solid fa-chevron-right ml-1 "></i>
        </div>
      </div>
      <div className="walletArea flex bg-greenForButton rounded-lg px-10 py-2 lg:py-0 items-center justify-center lg:w-1/4">
        <div className="infoArea text-white mr-8">
          <h1 className="md:text-[1.3vw] lg:text-[1.1vw] xl:text-[0.9vw] font-semibold">
            Toplam Reklam Bakiyesi: 250 ₺
          </h1>
        </div>
        <div className="addWalletArea text-white md:text-[1.5vw] lg:text-[1.3vw] xl:text-[1.2vw]">
          <button
            className="bg-greenDark rounded-full xl:w-[2.3vw] xl:h-[2.3vw] lg:w-[3vw] lg:h-[3vw] md:w-[3.5vw] md:h-[3.5vw] w-[5.5vw] h-[5.5vw]  flex items-center justify-center"
            onClick={OpenWalletModal()}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdvertTitleArea;
