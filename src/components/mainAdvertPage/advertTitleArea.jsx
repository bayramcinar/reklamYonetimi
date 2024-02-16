import React, { useEffect, useState } from "react";
import BalanceModal from "../balanceModal/balanceModal";

function AdvertTitleArea() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [totalBalance, setTotalBalance] = useState(null);

  const openWalletModal = () => {
    setIsWalletModalOpen(true);
  };

  function getTotalBalance(hesapNumarası) {
    const dataToSave = JSON.parse(localStorage.getItem("totalBalance")) || [];
    console.log(dataToSave, "dataToSave");

    if (Array.isArray(dataToSave)) {
      const existingAccount = dataToSave.find(
        (data) => data.hesapNumarası === hesapNumarası
      );

      if (existingAccount) {
        return existingAccount.miktar;
      } else {
        return 0;
      }
    } else {
      console.error("localStorage'dan alınan veri bir dizi değil.");
      return 0;
    }
  }

  const loadData = () => {
    const accountNumber = 123456;
    const miktar = getTotalBalance(accountNumber);
    console.log(miktar, "miktar");
    setTotalBalance(miktar);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="lg:flex m-5 justify-around">
        <div className="titleArea flex items-center justify-center my-4 lg:my-0 lg:w-1/4 bg-white rounded-lg lg:mr-5">
          <h1 className="md:text-[1.8vw] lg:text-[1.6vw] xl:text-[1.2vw] font-extrabold text-center py-2">
            Reklam Yönetimi
          </h1>
        </div>
        <div className="announcmentArea flex bg-white rounded-lg px-3 lg:px-10 my-4 lg:my-0 py-3 lg:py-5 justify-between mr-5 w-full">
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
        <div className="animate__animated animate__zoomIn border-2 border-greenForButton walletArea flex group text-white hover:text-greenForButton bg-greenForButton rounded-lg px-4 py-2 lg:py-0 items-center justify-between lg:w-1/3 overflow-hidden relative transition-all will-change-transform after:bg-white z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-greenForButton after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform group-hover:after:bg-white">
          <div className="infoArea  mr-8">
            <h1 className="md:text-[1.3vw] lg:text-[1.1vw] xl:text-[0.9vw] text-xs font-semibold">
              Toplam Reklam Bakiyesi:{" "}
              {totalBalance !== null ? `${totalBalance}₺` : "Yükleniyor"}
            </h1>
            <div className="giftWallet flex mt-2">
              <i className="fa-solid fa-gift mr-2"></i>
              <h1 className="md:text-[1.1vw] lg:text-[0.9vw] xl:text-[0.8vw] text-xs font-semibold">
                Hediye Bakiye: 250 ₺
              </h1>
            </div>
          </div>
          <div className="addWalletArea bg-greenDark rounded-full hover:bg-white hover:text-greenDark text-white md:text-[1.5vw] lg:text-[1.3vw] xl:text-[1.2vw] group-hover:bg-greenForButton group-hover:text-white group-hover:border-2 group-hover:border-greenForButton">
            <button
              className=" xl:w-[2.3vw] xl:h-[2.3vw] lg:w-[3vw] lg:h-[3vw] md:w-[3.5vw] md:h-[3.5vw] w-[5.5vw] h-[5.5vw]  flex items-center justify-center"
              onClick={openWalletModal}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      {isWalletModalOpen && (
        <BalanceModal
          isOpen={isWalletModalOpen}
          onClose={() => setIsWalletModalOpen(false)}
        />
      )}
    </>
  );
}

export default AdvertTitleArea;
