import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Taqvim from "./components/quran-audio/Quran";
import Taqvimitem from "./components/quran-audio/Quran-itme";
import { Linkpage } from "./components/Linkpage/Linkpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Linkpage />}>
            <Route path="/surahs" element={<Taqvimitem />} />
            <Route path="/surahs/:number" element={<Taqvim />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
