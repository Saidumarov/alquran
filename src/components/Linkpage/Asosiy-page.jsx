import React from "react";
import "./link.scss";
import bga from "../../assets/al1.png";
const Asosiypage = () => {
  return (
    <>
      <section className="asosiy">
        <div className="quron-wrap">
      
          <div className="quron-itme"></div>

          <div className="quran">
            <p className="quron-as-name">
              Qur'on o'rganing va har kuni bir marta tilovat qiling.
            </p>
            <div className="img-a">
              <img src={bga} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Asosiypage;
