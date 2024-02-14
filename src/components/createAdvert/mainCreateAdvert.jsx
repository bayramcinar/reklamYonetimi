import React, { useState } from "react";
import Pages from "./pages";
import CreateAdvertTitleArea from "./createAdvertTitle";
import AdvertInfo from "../advertInfo/advertInfo";
import MainSelectItemPage from "../selectItem/mainSelectItemPage";
import Swal from "sweetalert2";

function MainCreateAdvert({ setInitialValueAdded, initialValueAdded }) {
  const [activePage, setActivePage] = useState(1);
  const [valuesForContent, setValuesForContent] = useState("");
  const [complatedPages, setComplatedPages] = useState([false, false, false]);

  const handleButtonBackClick = () => {
    console.log(activePage);
    if (activePage === 2) {
      setComplatedPages([false, false, false]);
      setValuesForContent("");
    }
    if (activePage === 3) {
      setComplatedPages([true, false, false]);
    }
    setActivePage((prevActivePage) => prevActivePage - 1);
    updateCompletionStatus(activePage - 1, false);
  };

  const handleButtonClick = () => {
    setActivePage((prevActivePage) => prevActivePage + 1);
    updateCompletionStatus(activePage - 1, true);
  };

  const onSubmit = async (values) => {
    try {
      setValuesForContent(values);
      setInitialValueAdded(values);
      setActivePage((prevActivePage) => prevActivePage + 1);
      updateCompletionStatus(activePage - 1, true);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "hata",
        text: "Tüm alanları doldurmalısın",
      });
      console.log(error.message);
    }
  };

  const updateCompletionStatus = (pageIndex, status) => {
    setComplatedPages((prevComplatedPages) => {
      const updatedComplatedPages = [...prevComplatedPages];
      updatedComplatedPages[pageIndex] = status;
      return updatedComplatedPages;
    });
  };

  const renderPage = () => {
    switch (activePage) {
      case 1:
        return <AdvertInfo onSubmit={onSubmit} />;
      case 2:
        return (
          <MainSelectItemPage
            initialValues={valuesForContent}
            setInitialValueAdded={setInitialValueAdded}
          />
        );
      default:
        return null;
    }
  };

  const finish = () => {
    try {
      const serializedValue = JSON.stringify(initialValueAdded);
      const existingAdverts = localStorage.getItem("adverts");
      const advertsArray = existingAdverts ? JSON.parse(existingAdverts) : [];
      const parsedValue = JSON.parse(serializedValue);
      advertsArray.push(parsedValue);
      localStorage.setItem("adverts", JSON.stringify(advertsArray));
      setInitialValueAdded(null);
    } catch (error) {
      console.error("Error saving advert to localStorage:", error);
    }
  };

  return (
    <>
      <CreateAdvertTitleArea />
      <div className="bg-white m-5 rounded-lg">
        <div className="block lg:flex">
          <Pages active={activePage} complated={complatedPages} />
          {renderPage()}
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end border-t-2 border-gray-100 text-[3vw] md:text-[1.1vw] lg:text-[1vw] xl:text-[0.8vw]">
          {activePage > 1 && (
            <button
              style={{ marginTop: "24px" }}
              onClick={handleButtonBackClick}
              className="my-3 mb-0 lg:my-6 lg:mr-5 flex lg:mt-0 items-center justify-center text-center py-2 px-36 text-gray-600 bg-gray-200 border-2 hover:text-white border-gray-200 hover:border-gray-600 rounded-lg font-semibold overflow-hidden relative transition-all will-change-transform after:bg-gray-600 z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-gray-200 after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform"
            >
              Geri
            </button>
          )}
          {activePage < 3 && valuesForContent === "" && (
            <button
              value="Submit"
              form="myform"
              type="submit"
              style={{ marginTop: "24px" }}
              className="mb-3 lg:my-6 lg:mr-5 flex lg:mt-0 items-center justify-center text-center py-2 px-32 text-white bg-premiumOrange border-2 hover:text-premiumOrange border-premiumOrange rounded-lg font-semibold overflow-hidden relative transition-all will-change-transform after:bg-white z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-premiumOrange after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform"
            >
              Devam Et
            </button>
          )}
          {activePage < 3 && valuesForContent !== "" && (
            <button
              onClick={handleButtonClick}
              style={{ marginTop: "24px" }}
              className="mb-3 lg:my-6 lg:mr-5 flex lg:mt-0 items-center justify-center text-center py-2 px-32 text-white bg-premiumOrange border-2 hover:text-premiumOrange border-premiumOrange rounded-lg font-semibold overflow-hidden relative transition-all will-change-transform after:bg-white z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-premiumOrange after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform"
            >
              Devam Et
            </button>
          )}
          {activePage === 3 && (
            <button
              onClick={finish}
              style={{ marginTop: "24px" }}
              className="my-3 lg:my-6 lg:mr-5 flex lg:mt-0 items-center justify-center text-center py-2 px-36 text-white bg-premiumOrange border-2 hover:text-premiumOrange border-premiumOrange rounded-lg font-semibold overflow-hidden relative transition-all will-change-transform after:bg-white z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-premiumOrange after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform"
            >
              Bitir
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default MainCreateAdvert;
