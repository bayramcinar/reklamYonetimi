import React, { useState } from "react";
import Swal from 'sweetalert2';
import { useFormik } from "formik";
import * as Yup from "yup";

function AddBalance() {
  const [amount, setAmount] = useState(null);
  const [farkliMiktar, setFarkliMiktar] = useState();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [odemeTuru, setOdemeTuru] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("amount", amount);
  console.log("farkliMiktar", farkliMiktar);
  console.log("selectedAmount", selectedAmount);
  console.log("odeme turu", odemeTuru)

  const initialValues = {
    selectedAmount: 0,
    odemeTuru: 0,
    isApproved: false,
  }

  const validationSchema = Yup.object({
    selectedAmount: Yup.number().required("Lütfen en az birisini seçin"),
    odemeTuru:Yup.number().required("Lütfen birisini seçin"),
    isApproved:Yup.bool()
    .oneOf([true], "You must accept the terms and conditions"),   
  })

  const onSubmit = (values) => {
    try {
      handleClick();
      setIsSubmitting(true);
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

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
    })
  }
  function saveDataToLocalStorage() {
    if (dataToSave.length === 0) {
      console.log("hiç veri girilmedi")
      return
    }
    const existingData = JSON.parse(localStorage.getItem('balanceData')) || [];
    const newData = existingData.concat(dataToSave);

    localStorage.setItem("balanceData", JSON.stringify(newData))
    dataToSave = [];
    console.log("Veriler local storage'a kaydedildi.")
  }
  const handleOdemeTuruChange = (e) => {
    setOdemeTuru(e.target.value)
  }
  function handleClick() {
    let miktar;
    if (amount) {
      miktar = amount;
    } else if (farkliMiktar) {
      miktar = farkliMiktar;
    } else {
      console.log("miktar bilgisi eksik")
      return;
    }
    Swal.fire({
      title: `Seçtiğiniz miktar:${miktar}, Yatırmak istediğinizden emin misiniz?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Evet, eminim!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Satın alma işlemin tamamlandı!",
          icon: "success"
        });
      }
    });
    addToDataToSave(12345, miktar, odemeTuru);
    saveDataToLocalStorage();
  }
  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 lg:grid-cols-3  gap-y-2 lg:gap-y-5 gap-x-4 lg:gap-x-10 mb-5 lg:mb-10">
        <button
          className={`border-2 border-borderGray p-1 rounded-lg  hover:border-b-premiumOrange hover:bg-bgOrange text-center font-bold md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] ease-in duration-500 ${selectedAmount === 100
            ? "bg-bgOrange border-b-premiumOrange"
            : "bg-transparent"
            }`}
          onClick={() => {
            handleAmount(100);
            handleSelectedAmount(100);
            formik.setFieldValue("selectedAmount", 100)
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
            formik.setFieldValue("selectedAmount", 250)
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
            formik.setFieldValue("selectedAmount", 500)
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
            formik.setFieldValue("selectedAmount", 750)
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
            formik.setFieldValue("selectedAmount", 1000)
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
          onClick={() => {
            handleSelectedAmount(farkliMiktar);
            formik.setFieldValue("selectedAmount", farkliMiktar)
          }}
        />
      </div>
      <h4 className="mb-2 font-bold">Ödeme Seçenekleri</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 lg:gap-y-5 mb-5 lg:mb-10 md:text-[1.1vw] lg:text-[1vw] xl:text-[0.9vw] text-xs">
        <div className="flex border-2 border-gray-300 p-2 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange cursor-pointer highlight-on-hover font-bold">
          <input
            type="radio"
            className="me-2 md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw]"
            name="odemeTuru"
            value={0}
            // onChange={handleOdemeTuruChange}
            // checked={odemeTuru === "0"}
            onChange={formik.handleChange}
            checked={formik.values.odemeTuru === 0}
          />
          Hesaptan Satın Al
        </div>
        <div className="flex border-2 border-gray-300 p-2 rounded-lg  hover:border-b-premiumOrange  hover:bg-bgOrange cursor-pointer highlight-on-hover font-bold relative ">
          <input
            type="radio"
            className="me-2 relative md:text-[0.9vw] lg:text-[1vw] xl:text-[1.1vw] text-xs "
            name="odemeTuru"
            value={1}
            // onChange={handleOdemeTuruChange}
            // checked={odemeTuru === "1"}
            onChange={formik.handleChange}
            checked={formik.values.odemeTuru === 1}
            
          />
          Kredi Kartı ile Satın Al
          <div
            className={`inline-block bg-premiumOrange text-white text-[9px] rounded 
                        p-1 absolute top-1 left-56`}
          >
            YENİ
          </div>
        </div>
        {formik.errors.odemeTuru && formik.touched.odemeTuru && (
        <div>{formik.errors.odemeTuru}</div>
      )}
      </div>
      <div className="border"></div>
      <div className="flex flex-col md:flex-row items-center justify-between  py-3 lg:py-10">
        <div className="flex justify-center items-center ps-2">
          <input
            type="checkbox"
            name="isApproved"
            checked={formik.values.isApproved}
            onChange={formik.handleChange}
            className="flex items-center justify-center size-5"
          />
          <span className="p-2 items-start md:text-[1.1vw] lg:text-[1vw] xl:text-[0.8vw] text-xs">
            Ödeme işlemine devam edimesi halinde tahsil edilen tutarların iadesi
            mümkün olmayacaktır.İşleme devam ederek bu hususu kabul etmiş
            sayılacağını kabul ediyorum.
          </span>
        </div>
        <div className="flex w-full md:w-auto justify-center items-center flex-grow">
          {/* onClick={handleClick} bunu sildim */}
          <button
            type="submit" className="flex items-center mt-4 md:mt-0 w-full justify-center px-4 py-3 md:w-60 lg:w-48 overflow-hidden text-xs md:text-[1.1vw] lg:text-[1vw] xl:text-[0.9vw] font-bold text-txtWhite bg-premiumOrange border border-5 border-premiumOrange rounded hover:bg-transparent hover:text-premiumOrange focus:outline-none"
            href="/satınal" disabled={isSubmitting}
          >
            Satın Al
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddBalance;
