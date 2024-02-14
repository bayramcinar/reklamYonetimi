import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainAdvertPage/mainPage";
import MainCreateAdvert from "./components/createAdvert/mainCreateAdvert";
import React, { useState } from "react";
function App() {
  const [initialValueAdded, setInitialValueAdded] = useState();

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/reklamOlustur"
          element={
            <MainCreateAdvert
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
