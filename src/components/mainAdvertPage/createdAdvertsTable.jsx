import React, { useState } from "react";
import { Link } from "react-router-dom";
function CreatedAdvertsTable() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const data = [{}, {}];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageData = data.slice(startIndex, endIndex);
  return (
    <div className="bg-white rounded-lg mx-5">
      <div className="main">
        <div className="titleAndButtons lg:flex justify-between items-center m-4 px-4 py-6">
          <h1 className="text-[4vw] md:text-[1.6vw] lg:text-[1.5vw] xl:text-[1.3vw] font-bold text-center mb-3 lg:mb-0">
            Oluşturulan Reklamlar
          </h1>
          <div className="buttons lg:flex text-[3vw] md:text-[1.1vw] lg:text-[1vw] xl:text-[0.8vw]">
            <Link className="flex items-center justify-center w-full text-center py-2 px-10 text-premiumOrange bg-white hover:text-white border-2 border-premiumOrange rounded-lg font-semibold mr-4 overflow-hidden relative transition-all will-change-transform after:bg-premiumOrange z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-white after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform">
              <i className="fa-solid fa-circle-plus mr-2 "></i>
              <span style={{ whiteSpace: "nowrap" }}>Hızlı Reklam Oluştur</span>
            </Link>
            <Link
              className="flex mt-4 lg:mt-0 items-center justify-center w-full text-center py-2 px-6 text-white bg-premiumOrange border-2 hover:text-premiumOrange border-premiumOrange rounded-lg font-semibold overflow-hidden relative transition-all will-change-transform after:bg-white z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-premiumOrange after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform"
              to={"/reklamOlustur"}
            >
              Yeni Reklam Oluştur
            </Link>
          </div>
        </div>
        <div className="tableArea m-4 px-4 pb-5 hidden lg:block">
          <table className="rounded-xl w-full ">
            <thead className="text-sm">
              <tr className="sticky top-0 bg-lightGray text-gray-600">
                <th className="py-3 px-1">Reklam Bilgileri </th>
                <th className="py-3 px-1">
                  Reklam Bütçesi{" "}
                  <i class="fa-solid fa-circle-info text-gray-400 ml-2 cursor-pointer"></i>
                </th>
                <th className="py-3 px-1">
                  Harcanan Bütçe{" "}
                  <i class="fa-solid fa-circle-info text-gray-400 ml-2  cursor-pointer"></i>
                </th>
                <th className="py-3 px-1">
                  Gösterim Sayısı{" "}
                  <i class="fa-solid fa-circle-info text-gray-400 ml-2 cursor-pointer"></i>
                </th>
                <th className="py-3 px-1">
                  Tıklanma Sayısı{" "}
                  <i class="fa-solid fa-circle-info text-gray-400 ml-2 cursor-pointer"></i>
                </th>
                <th className="py-3 px-1">
                  Satış Adedi{" "}
                  <i class="fa-solid fa-circle-info text-gray-400 ml-2 cursor-pointer"></i>
                </th>
                <th className="py-3 px-1">
                  Reklam Cirosu{" "}
                  <i class="fa-solid fa-circle-info text-gray-400 ml-2 cursor-pointer"></i>
                </th>
                <th className="py-3 px-1">
                  Harcama Getirisi{" "}
                  <i class="fa-solid fa-circle-info text-gray-400 ml-2 cursor-pointer"></i>
                </th>
                <th className="py-3 px-1">İşlemler </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-3">
                  <div className="advertInfos flex items-center justify-start flex-col">
                    <h1 className="name text-md">Depresyon Tedavi</h1>
                    <h1 className="status text-sm text-gray-400">Tamamlandı</h1>
                    <h1 className="dates text-sm text-gray-400">
                      20.01.2024 - 03.02.2024
                    </h1>
                  </div>
                </td>
                <td className="px-2 py-3">
                  <div className="flex items-center justify-center">
                    <h1 className="text-sm text-gray-400">Toplam : </h1>
                    <h1 className="text-sm font-semibold">100 ₺</h1>
                  </div>
                </td>
                <td className="px-2 py-3">
                  <div className="flex items-center justify-center">
                    <h1 className="text-sm text-gray-400">Toplam : </h1>
                    <h1 className="text-sm font-semibold">75 ₺</h1>
                  </div>
                </td>
                <td className="px-2 py-3">
                  <h1 className="text-sm flex items-center justify-center">
                    4.310
                  </h1>
                </td>
                <td className="px-2 py-3">
                  <h1 className="text-sm flex items-center justify-center">
                    94
                  </h1>
                </td>
                <td className="px-2 py-3">
                  <h1 className="text-sm flex items-center justify-center">
                    5
                  </h1>
                </td>
                <td className="px-2 py-3">
                  <h1 className="text-sm font-semibold flex items-center justify-center">
                    322,2 ₺
                  </h1>
                </td>
                <td className="px-2 py-3">
                  <h1 className="text-sm flex items-center justify-center">
                    7.8
                  </h1>
                </td>
                <td className="px-2 py-3">
                  <div className="flex items-center justify-center">
                    <button className="text-gray-400 mr-4">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <button className="text-gray-400 ">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end m-3">
            <ul className="flex space-x-2">
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
    </div>
  );
}

export default CreatedAdvertsTable;
