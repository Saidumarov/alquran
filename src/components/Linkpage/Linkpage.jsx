import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import audio from "../../assets/audioo.png";
import kitob from "../../assets/kitob.png";
import namoz from "../../assets/namoz.png";
import "./link.scss";
import Asosiypage from "./Asosiy-page";
export const Linkpage = () => {
  const [isactiva, setActiva] = useState(false);
  const [isactiv, setActiv] = useState(false);
  const [hi, setHi] = useState();
  const bar = () => {
    setActiv(!isactiv);
    setActiva(!isactiv);
  };

  const bar1 = () => {
    setActiv(!isactiv);
    setActiva(!isactiv);
    setHi(50);
  };

  return (
    <>
      <Nav />
      {/* <Asosiypage /> */}
      <>
        <section>
          <div className={`bar1 ${isactiv ? "active" : ""}`} onClick={bar}>
            <div className="barr" style={{ transition: ".4s" }}></div>
            <div className="barr" style={{ transition: ".2s" }}></div>
            <div className="barr" style={{ transition: ".4s" }}></div>
          </div>
          <div className={`link-page ${isactiva ? "active" : ""}`}>
            <div className="link-itme">
              <Link to="/surahs" className="link" onClick={bar1}>
                <img src={audio} alt="" className="audio" />
                Quron tinglash
              </Link>
              <Link to="/quron" className="link" onClick={bar1}>
                <img src={kitob} alt="" className="kitob" />
                Quron o'qsh
              </Link>
              <Link to="/namoz" className="link" onClick={bar1}>
                <img src={namoz} alt="" className="namoz" />
                Namoz vaqtlar
              </Link>
              <Link to="/tasbeh" className="link" onClick={bar1}>
                <img src={namoz} alt="" className="namoz" />
                Tasbeh
              </Link>
            </div>
          </div>
        </section>
      </>

      <Outlet />
    </>
  );
};
