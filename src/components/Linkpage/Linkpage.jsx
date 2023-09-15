import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import audio from "../../assets/audioo.png";
import kitob from "../../assets/kitob.png";
import namoz from "../../assets/namoz.png";
import "./link.scss";
export const Linkpage = () => {
  return (
    <>
      <Nav />
      <>
        <section>
          <div className="link-page">
            <div className="link-itme">
              <Link to="/surahs" className="link">
                <img src={audio} alt="" className="audio" />
                Quron tinglash
              </Link>
              <Link to="/about" className="link">
                <img src={kitob} alt="" className="kitob" />
                Quron o'qsh
              </Link>
              <Link k to="/contact" className="link">
                <img src={namoz} alt="" className="namoz" />
                Namoz vaqtlar
              </Link>
            </div>
          </div>
        </section>
      </>

      <Outlet />
    </>
  );
};
