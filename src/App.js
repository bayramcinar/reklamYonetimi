import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainAdvertPage/mainPage";
import MainCreateAdvert from "./components/createAdvert/mainCreateAdvert";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reklamOlustur" element={<MainCreateAdvert />} />
      </Routes>
    </>
  );
}

export default App;
