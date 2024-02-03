import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainAdvertPage/mainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/table" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
