import React, { useState } from "react";
import SelectItemHeader from "./selectItem";
import ItemList from "./itemList";

function MainSelectItemPage({ initialValues }) {
  const [initalvalueAdded, setInitalvalueAdded] = useState();
  const day = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
  };
  const itemList = [
    //HİZMET VERENLERİN HİZMETLERİNİ ALACAĞIMIZ YER
    {
      name: "deneme",
      details: " Kişinin durumuna ve yaşına göre gerekli çözümler uygulanır",
      duration: 90,
    },
    {
      name: "depresyon",
      details: " Kişinin durumuna ve yaşına göre gerekli çözümler uygulanır",
      duration: 90,
    },
    {
      name: "depresyon",
      details: " Kişinin durumuna ve yaşına göre gerekli çözümler uygulanır",
      duration: 90,
    },
    {
      name: "depresyon",
      details: " Kişinin durumuna ve yaşına göre gerekli çözümler uygulanır",
      duration: 90,
    },
    {
      name: "depresyon",
      details: " Kişinin durumuna ve yaşına göre gerekli çözümler uygulanır",
      duration: 90,
    },
    {
      name: "depresyon",
      details: " Kişinin durumuna ve yaşına göre gerekli çözümler uygulanır",
      duration: 90,
    },
  ];

  console.log(initalvalueAdded);
  return (
    <div className="w-full">
      <SelectItemHeader />
      <ItemList
        amount={initialValues.gunlukButceMiktarı}
        selectedMethod={initialValues.reklamTipi}
        time={day(initialValues.baslangicTarihi, initialValues.bitisTarihi)}
        itemList={itemList}
        initialValues={initialValues}
        setInitialValues={setInitalvalueAdded}
      />
    </div>
  );
}

export default MainSelectItemPage;