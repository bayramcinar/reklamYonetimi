import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainAdvertPage/mainPage";
import BalanceModal from "./components/balanceModal/balanceModal";


function App() {
  return (
    <>
      <Routes>
        <Route path="/table" element={<MainPage />} />
        <Route path="/balanceModal" element={<BalanceModal />} />
      </Routes>
    </>
  );
}

export default App;
