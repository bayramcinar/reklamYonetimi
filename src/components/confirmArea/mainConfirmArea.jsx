import React, { useState } from "react";

function MainConfirmArea({
  advertName,
  advertType,
  advertEndDate,
  advertStartDate,
  selectedMethod,
  amount,
  time,
  selectedItems,
  total,
}) {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(selectedItems.length / itemsPerPage)
  );
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageNumberChange = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setTotalPages(Math.ceil(selectedItems.length / value));
    setCurrentPage(1);
  };

  return (
    <div className="w-full">
      <h1 className="text-md md:text-[1.3vw] lg:text-[1.3vw] xl:text-[1.3vw] font-semibold p-6 pb-0">
        Reklam Özeti
      </h1>
      <div className="titleArea lg:flex w-full p-3">
        <div className="advertName justify-start p-4 lg:w-1/2">
          <h1 className="text-gray-500 text-xs md:text-[0.8vw] lg:text-[0.8vw] xl:text-[0.8vw] font-semibold">
            Reklam Adı
          </h1>
          <h1 className="text-sm md:text-[1vw] lg:text-[1vw] xl:text-[1vw] font-bold mt-1">
            {advertName}
          </h1>
        </div>
        <div className="lg:w-1/2 flex justify-end ">
          <div className="advertType justify-start px-6 my-4 border-l-2 border-gray-200">
            <h1 className="text-gray-500 text-xs md:text-[0.8vw] lg:text-[0.8vw] xl:text-[0.8vw] font-semibold">
              Reklam Tipi
            </h1>
            <h1 className="text-sm md:text-[1vw] lg:text-[1vw] xl:text-[1vw] font-bold mt-1">
              {advertType === "1" ? "Hizmet Reklamı" : "Profil Reklamı"}
            </h1>
          </div>
          <div className="advertStartDate justify-start px-6 my-4 border-l-2 border-gray-200">
            <h1 className="text-gray-500 text-xs md:text-[0.8vw] lg:text-[0.8vw] xl:text-[0.8vw] font-semibold">
              Başlangıç Tarihi
            </h1>
            <h1 className="text-sm md:text-[1vw] lg:text-[1vw] xl:text-[1vw] font-bold mt-1">
              {advertStartDate}
            </h1>
          </div>
          <div className="advertEndDate justify-start px-6 my-4 border-l-2 border-gray-200">
            <h1 className="text-gray-500 text-xs md:text-[0.8vw] lg:text-[0.8vw] xl:text-[0.8vw] font-semibold">
              Bitiş Tarihi
            </h1>
            <h1 className="text-sm md:text-[1vw] lg:text-[1vw] xl:text-[1vw] font-bold mt-1">
              {advertEndDate}
            </h1>
          </div>
        </div>
      </div>
      <div className="selectedInfos my-2 mx-6">
        <div className=" bg-premiumOrange w-full rounded-lg flex justify-around items-center">
          <div className="selectedAmount lg:flex p-3 lg:p-6">
            <div className="rounded-full flex items-center justify-center w-[10vw] h-[10vw] lg:w-[4vw] lg:h-[4vw] mx-auto bg-premiumOrangeBg text-white">
              <i className="fa-solid fa-coins lg:m-6 text-xs lg:text-lg"></i>
            </div>
            <div className="text-white ml-3 flex flex-col items-start justify-center mt-2 lg:mt-0">
              <h1 className="text-sm md:text-[0.9vw] lg:text-[0.9vw] xl:text-[0.9vw]">
                {selectedMethod === "1" ? "Günlük Bütçe" : "Toplam Bütçe"}
              </h1>
              <h1 className="text-md md:text-[1.3vw] lg:text-[1.3vw] xl:text-[1.3vw] font-semibold">
                {amount} ₺
              </h1>
            </div>
          </div>
          <div className="selectedTime lg:flex p-3 lg:p-6">
            <div className="rounded-full flex items-center justify-center w-[10vw] h-[10vw] lg:w-[4vw] lg:h-[4vw] mx-auto bg-premiumOrangeBg text-white">
              <i className="fa-regular fa-calendar m-3 lg:m-6 text-xs lg:text-lg"></i>
            </div>
            <div className="text-white ml-3 flex flex-col items-start justify-center mt-2 lg:mt-0">
              <h1 className="text-sm md:text-[0.9vw] lg:text-[0.9vw] xl:text-[0.9vw]">
                Reklam Süresi
              </h1>
              <h1 className="text-md md:text-[1.3vw] lg:text-[1.3vw] xl:text-[1.3vw] font-semibold">
                {time} Gün
              </h1>
            </div>
          </div>
          <div className="selectedItems lg:flex p-3 lg:p-6">
            <div className="rounded-full flex items-center justify-center w-[10vw] h-[10vw] lg:w-[4vw] lg:h-[4vw] mx-auto bg-premiumOrangeBg text-white">
              <i className="fa-solid fa-boxes-stacked  m-3 lg:m-6 text-xs lg:text-lg"></i>
            </div>
            <div className="text-white ml-3 flex flex-col items-start justify-center mt-2 lg:mt-0">
              <h1 className="text-sm md:text-[0.9vw] lg:text-[0.9vw] xl:text-[0.9vw]">
                Ürün Sayısı
              </h1>
              <h1 className="text-md md:text-[1.3vw] lg:text-[1.3vw] xl:text-[1.3vw] font-semibold">
                {selectedItems.length} / {total.length}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-md md:text-[1.3vw] lg:text-[1.3vw] xl:text-[1.3vw] font-semibold">
          Seçilen Hizmetler
        </h1>
      </div>
      <table className="rounded-xl w-full">
        <thead className="text-xs md:text-sm">
          <tr className="sticky top-0 bg-lightGray text-gray-600">
            <th className="py-3 px-1">Hizmet Adı</th>
            <th className="py-3 px-1">Hizmet Detayları</th>
            <th className="py-3 px-1">Hizmet Süresi</th>
          </tr>
        </thead>
        <tbody>
          {selectedItems.map((item, index) => (
            <tr key={index}>
              <td className="px-2 py-3">
                <div className="advertInfos flex items-center justify-start flex-col">
                  <h1 className="name">{item.name}</h1>
                </div>
              </td>
              <td className="px-2 py-3">
                <div className="flex items-center justify-center">
                  <h1 className=" text-gray-400">{item.details}</h1>
                </div>
              </td>
              <td className="px-2 py-3">
                <div className="flex items-center justify-center">
                  <h1 className=" text-gray-400">{item.duration} Dakika</h1>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="lg:flex justify-between text-sm md:text-[1vw] lg:text-[1vw] xl:text-[0.8vw] m-6">
        <div className="flex items-center justify-center">
          <select
            id="pageNumberSelect"
            className="px-2 py-1 text-sm font-medium rounded-lg bg-white border-2 border-gray-200 text-gray-600"
            onChange={handlePageNumberChange}
            value={itemsPerPage}
          >
            <option value="">Sayfa Sayısı</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
          <h1 className="text-xs lg:text-sm text-gray-500 ml-2">
            Şuanda Gösterilen Sayı {itemsPerPage}
          </h1>
        </div>
        <ul className="flex space-x-2 mt-4 lg:mt-0">
          <li
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-5 py-2 border w-[80px] h-[40px] flex items-center justify-center cursor-pointer rounded-xl ${
              currentPage === 1
                ? "bg-grayBg text-gray-600 font-semibold"
                : "border-grayBg"
            }`}
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Önceki
            </button>
          </li>

          {[...Array(totalPages).keys()].map((page) => (
            <li
              key={page + 1}
              onClick={() => handlePageChange(page + 1)}
              className={`px-3 py-2 border w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-xl ${
                page + 1 === currentPage
                  ? "bg-grayBg text-gray-600 font-semibold"
                  : "border-grayBg"
              }`}
            >
              <button onClick={() => handlePageChange(page + 1)}>
                {page + 1}
              </button>
            </li>
          ))}
          <li
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-5 py-2 border w-[80px] h-[40px] flex items-center justify-center cursor-pointer rounded-xl ${
              currentPage === totalPages
                ? "bg-grayBg text-gray-600 font-semibold"
                : "border-grayBg"
            }`}
          >
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Sonraki
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainConfirmArea;
