import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Linkpage } from "./components/Linkpage/Linkpage";
import Qurontext from "./components/quron-text/Qurontext";
import Quronnashr from "./components/quron-text/Quron-nashr";
import Namoz from "./components/namoz/Namoz";
import Asosiypage from "./components/Linkpage/Asosiy-page";
import Tasbeh from "./components/tasbeh/Tasbeh";
import Quronitme from "./components/quran-audio/Quran-itme";
import Quron from "./components/quran-audio/Quran";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Linkpage />}>
            <Route  index element={<Asosiypage/>} />
            <Route path="/surahs" element={<Quronitme/>} />
            <Route path="/surahs/:number" element={<Quron />} />
            <Route path="/quron" element={<Qurontext />} />
            <Route path="/quron/:number" element={<Quronnashr />} />
            <Route path="/namoz" element={<Namoz />} />
            <Route path="/tasbeh" element={<Tasbeh />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
