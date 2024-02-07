import React from "react";


function AdvertTitleArea() {
  const OpenWalletModal = () => {
    //BAKİYE MODALINI AÇACAK FONKSİYON
   
  };

  return (
    <div className="flex m-5">
      <div className="titleArea flex items-center justify-start w-1/4">
        <h1 className="text-[1.2vw] font-extrabold">Reklam Yönetimi</h1>
      </div>
      <div className="announcmentArea flex bg-white rounded-lg px-10 py-5 justify-between mr-5 w-full">
        <i className="fa-solid fa-bullhorn text-[1.8vw] text-premiumOrange mr-4"></i>
        <h1 className="text-[0.8vw] flex items-center justify-center font-medium">
          Çok satan ürünlerin dahil edildiği reklamlar daha iyi performans
          göstermektedir.
        </h1>
        <div className="pagesArea flex items-center justify-center ml-4 font-semibold">
          <i className="fa-solid fa-chevron-left mr-1 text-[0.8vw]"></i>
          <h1 className="text-[0.8vw] text-premiumOrange mr-1">3</h1>
          <h1 className="text-[0.8vw] "> / 10</h1>
          <i className="fa-solid fa-chevron-right ml-1 text-[0.8vw]"></i>
        </div>
      </div>
      <div className="walletArea flex bg-greenForButton rounded-lg px-10 items-center justify-center w-1/4">
        <div className="infoArea text-white mr-8">
          <h1 className="text-[0.8vw] font-semibold">
            Toplam Reklam Bakiyesi: 250 ₺
          </h1>
        </div>
        <div className="addWalletArea text-white text-[1.2vw]">
          <button
            className="bg-greenDark rounded-full"
            onClick={OpenWalletModal()}
          >
            <i className="fa-solid fa-plus p-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdvertTitleArea;
