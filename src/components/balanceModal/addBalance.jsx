import React, { useState } from "react";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";

function AddBalance() {
  const [amount, setAmount] = useState(null);
  const [farkliMiktar, setFarkliMiktar] = useState();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [odemeTuru, setOdemeTuru] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialValues = {
    selectedAmount: 0,
    odemeTuru: 0,
    isApproved: false,
  };

  const validationSchema = Yup.object({
    selectedAmount: Yup.number().required("Lütfen en az birisini seçin"),
    odemeTuru: Yup.number().required("Lütfen birisini seçin"),
    isApproved: Yup.bool().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const onSubmit = async (values) => {
    try {
      await Swal.fire({
        title: `Seçtiğiniz miktar: ${selectedAmount}, Satın almak istiyor musunuz?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Evet, eminim!",
        cancelButtonText: "İptal et",
      }).then((result) => {
        if (result.isConfirmed) {
          // Kullanıcı onayladıysa, verileri localStorage'a kaydet.
          addToDataToSave(12345, selectedAmount, odemeTuru);
          saveDataToLocalStorage();
          setIsSubmitting(true);
          console.log(values);
          Swal.fire({
            title: "Satın alma işlemi tamamlandı!",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleAmount = (miktar) => {
    setAmount(miktar);
  };
  const handleAmountChange = (e) => {
    setFarkliMiktar(e.target.value);
  };

  const handleSelectedAmount = (amount) => {
    setSelectedAmount(selectedAmount === amount ? null : amount);
  };

  let dataToSave = [];
  function addToDataToSave(hesapNumarası, selectedAmount, odemeTuru) {
    dataToSave.push({
      hesapNumarası: Number(hesapNumarası),
      miktar: Number(selectedAmount),
      odemeTuru: Number(odemeTuru),
    });
  }
  function saveDataToLocalStorage() {
    if (dataToSave.length === 0) {
      console.log("hiç veri girilmedi");
      return;
    }
    const existingData = JSON.parse(localStorage.getItem("balanceData")) || [];
    const newData = existingData.concat(dataToSave);

    localStorage.setItem("balanceData", JSON.stringify(newData));
    dataToSave = [];
    console.log("Veriler local storage'a kaydedildi.");
  }

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <div
        className={`amount-group px-2 pt-2 mb-5 ${
          (formik.errors.selectedAmount || !formik.values.selectedAmount) &&
          formik.touched.selectedAmount
            ? "border border-x-white border-t-white border-b-red-500"
            : "border-[#e0e0e0] rounded-lg"
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-3  gap-y-2 lg:gap-y-5 gap-x-4 lg:gap-x-10 lg:mb-10 text-gray-500">
          <button
            type="button"
            value="100"
            name="miktar"
            className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange hover:bg-bgOrange text-center font-bold md:text-[1.1vw] lg:text-[1.2vw] xl:text-[1.1vw] ease-in duration-500 ${
              selectedAmount === 100
                ? "bg-bgOrange border-b-premiumOrange"
                : "bg-transparent"
            }`}
            onClick={() => {
              handleAmount(100);
              handleSelectedAmount(100);
              formik.setFieldValue("selectedAmount", 100);
            }}
          >
            100₺
          </button>
          <button
            type="button"
            className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange hover:bg-bgOrange text-center font-bold md:text-[1.1vw] lg:text-[1.2vw] xl:text-[1.1vw] ease-in duration-500 ${
              selectedAmount === 250
                ? "bg-bgOrange border-b-premiumOrange"
                : "bg-transparent"
            }`}
            onClick={() => {
              handleAmount(250);
              handleSelectedAmount(250);
              formik.setFieldValue("selectedAmount", 250);
            }}
          >
            250₺
          </button>
          <button
            type="button"
            className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold md:text-[1.1vw] lg:text-[1.2vw] xl:text-[1.1vw] ease-in duration-500 ${
              selectedAmount === 500
                ? "bg-bgOrange border-b-premiumOrange"
                : "bg-transparent"
            }`}
            onClick={() => {
              handleAmount(500);
              handleSelectedAmount(500);
              formik.setFieldValue("selectedAmount", 500);
            }}
          >
            500₺
          </button>
          <button
            type="button"
            className={`border-2 border-borderGray p-1 rounded-lg   hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold md:text-[1.1vw] lg:text-[1.2vw] xl:text-[1.1vw] ease-in duration-500 ${
              selectedAmount === 750
                ? "bg-bgOrange border-b-premiumOrange"
                : "bg-transparent "
            }`}
            onClick={() => {
              handleAmount(750);
              handleSelectedAmount(750);
              formik.setFieldValue("selectedAmount", 750);
            }}
          >
            750₺
          </button>
          <button
            type="button"
            className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange text-center font-bold md:text-[1.1vw] lg:text-[1.2vw] xl:text-[1.1vw] ease-in duration-500 ${
              selectedAmount === 1000
                ? "bg-bgOrange border-b-premiumOrange"
                : "bg-transparent"
            }`}
            onClick={() => {
              handleAmount(1000);
              handleSelectedAmount(1000);
              formik.setFieldValue("selectedAmount", 1000);
            }}
          >
            1000₺
          </button>
          <input
            type="number"
            placeholder="Farklı miktar gir"
            min="0"
            className={`placeholder:text-sm border-2 p-1 rounded-lg hover:border-b-premiumOrange hover:bg-bgOrange text-center font-bold md:text-[1.1vw] lg:text-[1.2vw] xl:text-[1.1vw] ease-in duration-500 focus:border-red- ${
              selectedAmount === farkliMiktar
                ? "bg-bgOrange border-premiumOrange"
                : "bg-transparent border-borderGrey"
            } `}
            value={farkliMiktar}
            onChange={handleAmountChange}
            onClick={() => {
              handleSelectedAmount(farkliMiktar);
              formik.setFieldValue("selectedAmount", farkliMiktar);
            }}
            onKeyPress={(e) => {
              if (e.key === "-" || e.key === "e" || e.key === "E") {
                e.preventDefault();
              }
            }}
          />
        </div>
        {(formik.errors.selectedAmount || !formik.values.selectedAmount) &&
          formik.touched.selectedAmount && (
            <div className="text-red-600 underline-offset-4 text-sm mt-2">
              Miktarı giriniz
            </div>
          )}
      </div>

      <div
        className={`odeme-secenekleri text-gray-600 px-2 mt-2 ${
          (formik.errors.odemeTuru || !formik.values.odemeTuru) &&
          formik.touched.odemeTuru
            ? "border border-x-white border-t-white border-b-red-500"
            : "border-[#e0e0e0] rounded-lg"
        }`}
      >
        <h4 className="mb-2 font-bold">Ödeme Seçenekleri</h4>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 lg:gap-y-5  md:text-[1.1vw] lg:text-[1vw] xl:text-[0.9vw] text-sm ${
            (formik.errors.odemeTuru || !formik.values.odemeTuru) &&
            formik.touched.odemeTuru
              ? "mb-1 lg:mb-1"
              : "mb-5 lg:mb-10"
          }`}
        >
          <div className="flex border-2 border-gray-300 p-2 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange cursor-pointer highlight-on-hover font-bold">
            <input
              type="radio"
              className="me-2 md:text-[1.1vw] lg:text-[1.2vw] xl:text-[1.1vw]"
              name="odemeTuru"
              value="0"
              onChange={formik.handleChange}
              checked={formik.values.odemeTuru === "0"}
            />
            Hesaptan Satın Al
          </div>
          <div className="flex border-2 border-gray-300 p-2 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange cursor-pointer highlight-on-hover font-bold relative ">
            <input
              type="radio"
              className="me-2 relative md:text-[1.1vw] lg:text-[1.2vw] xl:text-[1.1vw] text-xs "
              name="odemeTuru"
              value="1"
              onChange={formik.handleChange}
              checked={formik.values.odemeTuru === "1"}
            />
            Kredi Kartı ile Satın Al
          </div>

          {(formik.errors.odemeTuru || !formik.values.odemeTuru) &&
            formik.touched.odemeTuru && (
              <div className="inline-block text-red-600 underline-offset-4 mt-2">
                Ödeme türünü seçiniz
              </div>
            )}
        </div>
      </div>

      <div className="border"></div>
      <div className="flex flex-col md:flex-row items-center justify-between  py-3 lg:py-5 text-gray-700">
        <div
          className={`p-2 ${
            (formik.errors.isApproved || !formik.values.isApproved) &&
            formik.touched.isApproved
              ? "border border-x-white border-t-white border-b-red-500"
              : "border-[#e0e0e0] rounded-lg"
          }`}
        >
          <div className="flex justify-center items-center ps-2">
            <input
              type="checkbox"
              name="isApproved"
              checked={formik.values.isApproved}
              onChange={formik.handleChange}
              className="flex items-center justify-center size-5"
            />
            <span className="p-2 items-start md:text-[1.1vw] lg:text-[1vw] xl:text-[0.8vw] text-xs">
              Ödeme işlemine devam edimesi halinde tahsil edilen tutarların
              iadesi mümkün olmayacaktır.İşleme devam ederek bu hususu kabul
              etmiş sayılacağını kabul ediyorum.
            </span>
          </div>
          {(formik.errors.isApproved || !formik.values.isApproved) &&
            formik.touched.isApproved && (
              <span className="inline-block text-red-600 underline-offset-4 text-sm mt-2">
                Onaylamayı unuttunuz
              </span>
            )}
        </div>
        <div className="flex w-full md:w-auto justify-center items-center flex-grow">
          <button
            href="/satınal"
            disabled={isSubmitting}
            type="submit"
            className="flex items-center justify-center text-center py-2 px-14 text-white bg-premiumOrange hover:text-premiumOrange border-2 border-premiumOrange rounded-lg font-semibold  overflow-hidden relative transition-all will-change-transform after:bg-white z-0 after:block after:w-full after:h-full after:absolute after:left-0 after:text-white after:top-0 after:transform after:translate-x-[-100%] after:origin-top-left after:transition-transform after:duration-[400ms] after:ease-out after:will-change-transform after:z-[-1] hover:after:translate-x-[0%] hover:border-2 hover:border-transparent hover:scale-105 hover:transform-none hover:duration-300 hover:ease-out hover:will-change-transform"
            to={"/reklamOlustur"}
          >
            <span style={{ whiteSpace: "nowrap" }}>Satın Al</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddBalance;
