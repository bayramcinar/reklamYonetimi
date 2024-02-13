import React from "react";
import SelectItemHeader from "./selectItem";
import ItemList from "./itemList";

function MainSelectItemPage({ initialValues }) {
  console.log(initialValues);
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
  return (
    <div className="w-full">
      <SelectItemHeader />
      <ItemList
        amount={100}
        selectedMethod={"Günlük Reklam"}
        time={5}
        itemList={itemList}
      />
    </div>
  );
}

export default MainSelectItemPage;
