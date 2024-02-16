import React, { useEffect, useState } from "react";
import BalanceTransactionsCard from "./balanceTransactionsCard";

function BalanceTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(transactions.length / itemsPerPage)
  );
  useEffect(() => {
    setTotalPages(Math.ceil(transactions.length / itemsPerPage));
  }, [transactions, itemsPerPage]);

  useEffect(() => {
    const localStorageDataAddBalance =
      JSON.parse(localStorage.getItem("addBalance")) || [];
    const localStorageDataAdverts =
      JSON.parse(localStorage.getItem("adverts")) || [];

    const mergedTransactions = [
      ...localStorageDataAddBalance,
      ...localStorageDataAdverts,
    ];

    setTransactions(mergedTransactions);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageNumberChange = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div>
      {currentTransactions.map((transaction, index) => (
        <BalanceTransactionsCard
          key={index}
          amount={transaction.miktar || -transaction.gunlukButceMiktarı}
          date={transaction.islemTarihi || transaction.reklamTarihi}
          type={transaction.reklamTipi || transaction.odemeTuru}
          name={transaction.reklamAdi || "Bakiye Yükleme"}
        />
      ))}
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
  );
}

export default BalanceTransactions;
