import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainAdvertPage/mainPage";
import MainCreateAdvert from "./components/createAdvert/mainCreateAdvert";
import React, { useState } from "react";
import postImg from "./img/post.png";
function App() {
  const [initialValueAdded, setInitialValueAdded] = useState();
  const postList = [
    //HİZMET VERENLERİN GÖNDERİLERİNİ ALACAĞIMIZ YER
    {
      id: "1",
      img: postImg,
      postDate: "02/02/2024",
      details: "#ofistik",
      like: 90,
      views: 540,
      comment: 8,
    },
    {
      id: "2",
      img: postImg,
      postDate: "02/02/2024",
      details: "#ofistik",
      like: 90,
      views: 540,
      comment: 8,
    },
    {
      id: "3",
      img: postImg,
      postDate: "02/02/2024",
      details: "#ofistik",
      like: 90,
      views: 540,
      comment: 8,
    },
    {
      id: "4",
      img: postImg,
      postDate: "02/02/2024",
      details: "#ofistik",
      like: 90,
      views: 540,
      comment: 8,
    },
    {
      id: "5",
      img: postImg,
      postDate: "02/02/2024",
      details: "#ofistik",
      like: 90,
      views: 540,
      comment: 8,
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
              postList={postList}
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
