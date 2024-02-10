import React, { useState } from "react";

function AddBalance() {
  const [amount, setAmount] = useState(null);
  const [farkliMiktar, setFarkliMiktar] = useState();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [odemeTuru, setOdemeTuru] = useState(null);
  console.log("amount", amount);
  console.log("farkliMiktar", farkliMiktar);
  console.log("selectedAmount", selectedAmount);

  const handleAmount = (miktar) => {
    setAmount(miktar);
  };
  const handleAmountChange = (e) => {
    setFarkliMiktar(e.target.value);
  };

  const handleSelectedAmount = (amount) => {
    setSelectedAmount(selectedAmount === amount ? null : amount);
  };

  function saveDataToLocalStorage(hesapNumarası, miktar, odemeTuru) {
    const existingData = localStorage.getItem('balanceData')
    let newData = [];

    if (existingData) {
      newData = JSON.parse(existingData)
    }
    const newEntry = {
      hesapNumarası: Number(hesapNumarası),
      miktar: miktar,
      odemeTuru: odemeTuru,
    }

    newData.push(newEntry);

    localStorage.setItem("balanceData", JSON.stringify(newData))

  }
  const handleOdemeTuruChange=(e)=>{
    setOdemeTuru(e.target.value)
  }
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3  gap-y-2 lg:gap-y-5 gap-x-4 lg:gap-x-10 mb-5 lg:mb-10">
        <button
          className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500 ${selectedAmount === 100
              ? "bg-bgOrange border-b-premiumOrange"
              : "bg-transparent"
            }`}
          onClick={() => {
            handleAmount(100);
            handleSelectedAmount(100);
          }}
        >
          100₺
        </button>
        <button
          className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500 ${selectedAmount === 250
              ? "bg-bgOrange border-b-premiumOrange"
              : "bg-transparent"
            }`}
          onClick={() => {
            handleAmount(250);
            handleSelectedAmount(250);
          }}
        >
          250₺
        </button>
        <button
          className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500 ${selectedAmount === 500
              ? "bg-bgOrange border-b-premiumOrange"
              : "bg-transparent"
            }`}
          onClick={() => {
            handleAmount(500);
            handleSelectedAmount(500);
          }}
        >
          500₺
        </button>
        <button
          className={`border-2 border-borderGray p-1 rounded-lg   hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500 ${selectedAmount === 750
              ? "bg-bgOrange border-b-premiumOrange"
              : "bg-transparent "
            }`}
          onClick={() => {
            handleAmount(750);
            handleSelectedAmount(750);
          }}
        >
          750₺
        </button>
        <button
          className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500 ${selectedAmount === 1000
              ? "bg-bgOrange border-b-premiumOrange"
              : "bg-transparent"
            }`}
          onClick={() => {
            handleAmount(1000);
            handleSelectedAmount(1000);
          }}
        >
          1000₺
        </button>
        <input
          type="number"
          placeholder="Farklı miktar gir"
          className={`placeholder:text-sm border-2   p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500  focus:border-red- ${selectedAmount === farkliMiktar
              ? "bg-bgOrange border-premiumOrange"
              : "bg-transparent border-borderGrey"
            } `}
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
            value="hesap"
            onChange={handleOdemeTuruChange}
            checked={odemeTuru==='hesap'}
          />
          Hesaptan Satın Al
        </div>
        <div className="flex border-2 border-gray-300 p-2 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange cursor-pointer highlight-on-hover font-bold relative ">
          <input
            type="radio"
            className="me-2 relative md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] text-xs "
            name="buy"
            value="krediKarti"
            onChange={handleOdemeTuruChange}
            checked={odemeTuru==='krediKarti'}
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
            Ödeme işlemine devam edimesi halinde tahsil edilen tutarların iadesi
            mümkün olmayacaktır.İşleme devam ederek bu hususu kabul etmiş
            sayılacağını kabul ediyorum.
          </span>
        </div>
        <div className="flex w-full md:w-auto justify-center items-center flex-grow">
          <button
            className="flex items-center mt-4 md:mt-0 w-full justify-center px-4 py-3 md:w-60 lg:w-48 overflow-hidden text-xs md:text-[1.1vw] lg:text-[1vw] xl:text-[0.9vw] font-bold text-txtWhite bg-premiumOrange border border-5 border-premiumOrange rounded hover:bg-transparent hover:text-premiumOrange focus:outline-none"
            href="/satınal" onClick={saveDataToLocalStorage("12345", amount || farkliMiktar, odemeTuru)}
          >
            Satın Al
          </button>
        </div>
      </div>
    </>
  );
}

export default AddBalance;
