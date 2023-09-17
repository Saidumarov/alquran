import React, { useState, useEffect } from "react";
import "./namoz.scss";
import b from "../../assets/b.png";
import ch from "../../assets/ch.png";
import p from "../../assets/p.png";
import a from "../../assets/a.png";
import sh from "../../assets/sh.png";
import x from "../../assets/aa.png";

function PrayerTimes() {
  const [data, setData] = useState({
    city: "",
    date: "",
    today: {},
    tomorrow: {},
  });
  const [loading, setLoading] = useState(true); // Track loading state

  const handleCityChange = async (event) => {
    const selectedCity = event.target.value;
    setLoading(true);
    console.log(selectedCity);
    try {
      const response = await fetch(
        `https://dailyprayer.abdulrcs.repl.co/api/${selectedCity}`
      );
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="quron-wrap1">
      <div className="sl1">
        <select className="sl" onChange={handleCityChange}>
          <option value="tashkent" className="oo">
            Toshkent
          </option>
          <option value="samarqand">Samarqand</option>
          <option value="farg'ona">Farg'ona</option>
          <option value="kitob">Kitob</option>
          <option value="qarshi">Qarshi</option>
          <option value="namangan">Namangan</option>
          <option value="andijon">Andijon</option>
          <option value="navoiy">Navoiy</option>
          <option value="buxoro">Buxoro</option>
          <option value="qoraqlpoq">Qoraqalpoq</option>
          <option value="nukus">Nukus</option>
        </select>
      </div>
      <div className="quron-itme1"></div>
      <div className="quran1">
        {/* {loading ? (
          <div className="loading-w">
            <div className="loading">
              <div className="l1"></div>
              <div className="l2"></div>
              <div className="l3"></div>
              <div className="l4"></div>
              <div className="l5"></div>
            </div>
          </div>
        ) : ( */}
        <div>
          <p className="n-h2">Namoz vaqtlari {data.city}.</p>
          <div className="namoz-b">
            <p className="n-b">
              <img src={b} className="img-n" alt="" />
              Bomdod: {data.tomorrow.Fajr}
            </p>
            <p className="n-b">
              <img src={ch} className="img-n" alt="" />
              Quyosh: {data.tomorrow.Sunrise}
            </p>
            <p className="n-b">
              <img src={p} className="img-n" alt="" />
              Peshin: {data.tomorrow.Dhuhr}
            </p>
            <p className="n-b">
              <img src={a} className="img-n" alt="" />
              Asr: {data.tomorrow.Asr}
            </p>
            <p className="n-b">
              <img src={sh} className="img-n" alt="" />
              Shom: {data.tomorrow.Maghrib}
            </p>
            <p className="n-b">
              <img src={x} className="img-n" alt="" />
              Xufton: {data.tomorrow.Ishaa}
            </p>
          </div>
        </div>
        {/* )} */}
        <div className="bot"></div>
      </div>
    </div>
  );
}

export default PrayerTimes;
