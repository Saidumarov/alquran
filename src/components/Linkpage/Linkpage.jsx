import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import audio from "../../assets/audioo.png";
import kitob from "../../assets/kitob.png";
import namoz from "../../assets/namoz.png";
import tasbeh from "../../assets/r.png";

import "./link.scss";
export const Linkpage = () => {
  const [isactiva, setActiva] = useState(false);
  const [isactiv, setActiv] = useState(false);
  const [hi, setHi] = useState();
  const [es, setEs] = useState();
  const bar = () => {
    setActiv(!isactiv);
    setActiva(!isactiv);
    setEs(100);
  };

  const bar1 = () => {
    setActiv(!isactiv);
    setActiva(!isactiv);
    setHi(50);
  };

  return (
    <>
      <Nav />
      <>
        <section>
          <div className="eslatma" style={{ top: ` ${-es}%` }}>
            Kerakli bo'limdi tanlang
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
            >
              <g clip-path="url(#clip0_0_328)">
                <path
                  d="M25.375 61.625L61.625 25.375"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M29 25.375L61.625 25.375L61.625 58"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_0_328">
                  <rect
                    width="87"
                    height="87"
                    fill="white"
                    transform="translate(0 87) rotate(-90)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
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
                <img src={tasbeh} alt="" className="namoz" />
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
