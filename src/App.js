import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainAdvertPage/mainPage";
import BalanceModal from "./components/balanceModal/balanceModal";
import MainCreateAdvert from "./components/createAdvert/mainCreateAdvert";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/balanceModal" element={<BalanceModal />} />
        <Route path="/reklamOlustur" element={<MainCreateAdvert />} />
      </Routes>
    </>
  );
}

export default App;
