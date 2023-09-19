import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./quron.scss";
function Taqvimitem() {
  const [surahs, setSurahs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.alquran.cloud/v1/quran/ar.alafasy"
        );
        setSurahs(response.data.data.surahs);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSurahs = surahs.filter(
    (surah) =>
      surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surah.englishName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <section className="as">
        <div className="quron-wrap">
          <div className="quron-itme"></div>

          <div className="quran">
            <div className="top1">
              <h1>القرآن الكريم </h1>
            </div>
        <div className="in">
        <div className="input">
              <input
                type="search"
                placeholder="Search Quran"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div className="svg">
                <svg
                  data-v-130f92c0=""
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ui-icon  magnifying-glass"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5 10.5C15.5 13.2614 13.2614 15.5 10.5 15.5C7.73858 15.5 5.5 13.2614 5.5 10.5C5.5 7.73858 7.73858 5.5 10.5 5.5C13.2614 5.5 15.5 7.73858 15.5 10.5ZM14.3398 15.7451C13.264 16.5341 11.9364 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5C17 11.9364 16.5341 13.264 15.7451 14.3398L19.709 18.3036C20.097 18.6917 20.097 19.3209 19.709 19.709C19.3209 20.097 18.6917 20.097 18.3036 19.709L14.3398 15.7451Z"
                  ></path>
                </svg>
              </div>
            </div>
        </div>
            <div className="quran-s">
              <div className="top">
                <h1> </h1>
              </div>

              {surahs.length > 0 ? (
                filteredSurahs.map((surah) => (
                  <Link to={`/surahs/${surah.number}`} className="a">
                    <div key={surah.number} className="quran-app">
                      <p className="num">{surah.number}</p>
                      <p className="mane">{surah.name}</p>
                      <p className="mane1">Name: {surah.englishName}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="loading-w1">
                <div className="loading">
                  <div className="l1"></div>
                  <div className="l2"></div>
                  <div className="l3"></div>
                  <div className="l4"></div>
                  <div className="l5"></div>
                </div>
              </div>
              )}
              <div className="bott"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Taqvimitem;
