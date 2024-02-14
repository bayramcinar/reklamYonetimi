import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainAdvertPage/mainPage";
import MainCreateAdvert from "./components/createAdvert/mainCreateAdvert";
import React, { useState } from "react";
function App() {
  const [initialValueAdded, setInitialValueAdded] = useState();
  const itemList = [
    //HİZMET VERENLERİN HİZMETLERİNİ ALACAĞIMIZ YER
    {
      id: "1",
      name: "deneme",
      details: " Kişinin durumuna ve yaşına göre gerekli çözümler uygulanır",
      duration: 90,
    },
    {
      id: "2",
      name: "depresyon",
      details: " Kişinin durumuna ve yaşına göre gerekli çözümler uygulanır",
      duration: 90,
    },
    {
      id: "3",
      name: "ilişki terapisi",
      details: " Kişinin durumuna ve yaşına göre gerekli çözümler uygulanır",
      duration: 90,
    },
    {
      id: "4",
      name: "bireysel terapi",
      details: " Kişinin durumuna ve yaşına göre gerekli çözümler uygulanır",
      duration: 90,
    },
    {
      id: "5",
      name: "varoluşsal problemler",
      details: " Kişinin durumuna ve yaşına göre gerekli çözümler uygulanır",
      duration: 90,
    },
    {
      id: "6",
      name: "uyum bozuklukları",
      details: " Kişinin durumuna ve yaşına göre gerekli çözümler uygulanır",
      duration: 90,
    },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/reklamOlustur"
          element={
            <MainCreateAdvert
              itemList={itemList}
              setInitialValueAdded={setInitialValueAdded}
              initialValueAdded={initialValueAdded}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
