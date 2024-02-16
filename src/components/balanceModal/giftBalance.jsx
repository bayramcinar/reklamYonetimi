import React, { useState } from "react";

function GiftBalance() {
  const [code, setCode] = useState(""); // Kullanıcının girdiği kodu saklamak için bir state

  const handleCodeChange = (e) => {
    const formattedCode = e.target.value
      .replace(/\W/g, "")
      .replace(/(.{4})/g, "$1-")
      .slice(0, 19);
    setCode(formattedCode);
  };

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="titleArea">
        <h1 className="text-sm md:text-[1.1vw] lg:text-[1.1vw] xl:text-[1.1vw] font-semibold text-gray-600 text-center">
          Hediye Bakiye Aktif Et
        </h1>
        <h1 className="text-xs md:text-[0.9vw] lg:text-[0.9vw] xl:text-[0.9vw] font-semibold text-gray-500 my-3 text-center">
          Size verilen hediye bakiye kodunu aşağıdaki alana yapıştırıp aktif
          edebilirsiniz.
        </h1>
      </div>
      <input
        type="text"
        className="border border-gray-300 p-2 mt-2 rounded-lg"
        placeholder="acA6-caEG-C39x-cvp9"
        value={code}
        onChange={handleCodeChange}
      />
      <div className="buttons lg:flex text-[3vw] md:text-[1.1vw] lg:text-[1vw] xl:text-[0.8vw] flex items-center justify-center my-5">
        <button
          className="flex items-center justify-center text-center py-2 px-10 text-premiumOrange bg-white hover:text-white border-2 border-premiumOrange rounded-lg font-semibold  overflow-hidden relative transition-all will-change-transform after:bg-premiumOrange z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-white after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform"
          to={"/reklamOlustur"}
        >
          <span style={{ whiteSpace: "nowrap" }}>Hediye Çekini Aktif Et</span>
        </button>
      </div>
    </div>
  );
}

export default GiftBalance;
