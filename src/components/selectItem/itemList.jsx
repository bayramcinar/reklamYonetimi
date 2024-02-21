import React, { useState } from "react";

function ItemList({
  itemList,
  selectedMethod,
  amount,
  time,
  initialValues,
  setInitialValues,
}) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(itemList.length / itemsPerPage)
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleCheckboxChange = (item) => {
    const isSelected = selectedItems.some(
      (selectedItem) => selectedItem.id === item.id
    );

    let updatedSelectedItems;
    if (isSelected) {
      updatedSelectedItems = selectedItems.filter(
        (selectedItem) => selectedItem.id !== item.id
      );
    } else {
      updatedSelectedItems = [...selectedItems, item];
    }

    setSelectedItems(updatedSelectedItems);

    const newValues = { ...initialValues };
    newValues.hizmetler = updatedSelectedItems;
    setInitialValues(newValues);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageNumberChange = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setTotalPages(Math.ceil(itemList.length / value));
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredItems = itemList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="w-full mb-5">
      <div className="selectedInfos my-2 mx-6">
        <div className=" bg-premiumOrange w-full rounded-lg flex justify-around items-center">
          <div className="selectedAmount lg:flex p-3 lg:p-6">
            <div className="rounded-full flex items-center justify-center w-[10vw] h-[10vw] lg:w-[4vw] lg:h-[4vw] mx-auto bg-premiumOrangeBg text-white">
              <i className="fa-solid fa-coins lg:m-6 text-xs lg:text-lg"></i>
            </div>
            <div className="text-white lg:ml-3 flex flex-col items-start justify-center mt-2 lg:mt-0">
              <h1 className="text-sm md:text-[0.9vw] lg:text-[0.9vw] xl:text-[0.9vw] text-center">
                {selectedMethod === "1" ? "Günlük Bütçe" : "Toplam Bütçe"}
              </h1>
              <h1 className="text-md md:text-[1.3vw] lg:text-[1.3vw] xl:text-[1.3vw] font-semibold  text-center w-full lg:text-start">
                {amount} ₺
              </h1>
            </div>
          </div>
          <div className="selectedTime lg:flex p-3 lg:p-6 ">
            <div className="rounded-full flex items-center justify-center w-[10vw] h-[10vw] lg:w-[4vw] lg:h-[4vw] mx-auto bg-premiumOrangeBg text-white">
              <i className="fa-regular fa-calendar m-3 lg:m-6 text-xs lg:text-lg"></i>
            </div>
            <div className="text-white lg:ml-3 flex flex-col items-start justify-center mt-2 lg:mt-0 ">
              <h1 className="text-sm md:text-[0.9vw] lg:text-[0.9vw] xl:text-[0.9vw] text-center">
                Reklam Süresi
              </h1>
              <h1 className="text-md md:text-[1.3vw] lg:text-[1.3vw] xl:text-[1.3vw] font-semibold text-center w-full lg:text-start">
                {time} Gün
              </h1>
            </div>
          </div>
          <div className="selectedItems lg:flex p-3 lg:p-6">
            <div className="rounded-full flex items-center justify-center w-[10vw] h-[10vw] lg:w-[4vw] lg:h-[4vw] mx-auto bg-premiumOrangeBg text-white">
              <i className="fa-solid fa-boxes-stacked  m-3 lg:m-6 text-xs lg:text-lg"></i>
            </div>
            <div className="text-white lg:ml-3 flex flex-col items-start justify-center mt-2 lg:mt-0">
              <h1 className="text-sm md:text-[0.9vw] lg:text-[0.9vw] xl:text-[0.9vw] text-center">
                Ürün Sayısı
              </h1>
              <h1 className="text-md md:text-[1.3vw] lg:text-[1.3vw] xl:text-[1.3vw] font-semibold text-center w-full lg:text-start">
                {selectedItems.length} / {itemList.length}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="tableArea my-4 mx-6 text-xs md:text-[1vw] lg:text-[1vw] xl:text-[0.8vw]">
        <div className="relative ml-auto hidden lg:flex items-center justify-end my-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Ara..."
            className="border rounded-md p-1 focus:outline-none "
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <i className="fas fa-search text-gray-500"></i>
          </div>
        </div>
        <table className="rounded-xl w-full">
          <thead className="text-xs md:text-sm">
            <tr className="sticky top-0 bg-lightGray text-gray-600">
              <th className="py-3 px-1">Seç</th>
              <th className="py-3 px-1">Hizmet Adı</th>
              <th className="py-3 px-1">Hizmet Detayları</th>
              <th className="py-3 px-1">Hizmet Süresi</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td className="px-2 py-3 flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.some(
                      (selectedItem) => selectedItem.id === item.id
                    )}
                    onChange={() => handleCheckboxChange(item)}
                  />
                </td>
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
        <div className="lg:flex justify-between m-3 text-sm md:text-[1vw] lg:text-[1vw] xl:text-[0.8vw]">
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
    </div>
  );
}

export default ItemList;
