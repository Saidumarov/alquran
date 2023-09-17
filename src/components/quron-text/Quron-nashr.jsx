import React, { useEffect, useState } from 'react'
import axios from "axios";
import "../quran-audio/quron.scss"
import { Link, useParams } from "react-router-dom";
const Quronnashr = () => {
    const [surah, setSurah] = useState(null); // Use an object for surah instead of an array
    const { number } = useParams(); // Call useParams to get the number parameter
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(
            `https://api.alquran.cloud/v1/surah/${number}`
          );
          setSurah(response.data.data); // Store the Surah data, not just surahs
          console.log(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, [number]);
  
    return (
      <>
        <section>
          <div className="container">
            <div className="con-left"></div>
            <div className="con-cen">
              {surah ? (
                <div>
                  <h2 className="sura-name">{surah.name}</h2>
                  <p className="oyat">
                    {surah.number}: {surah.englishName}
                  </p>
                  {surah.ayahs.map((ayah) => (
                    <div className="oyat-itme1">
                      <p className="text">{ayah.text}</p>
            
                  
                    </div>
                  ))}
                   <Link to="/quron" >
                   <div className="back">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line x1="19" y1="12" x2="5" y2="12"></line>
                          <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                      </div>
                   </Link>
                </div>
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
              
            </div>
          </div>
        </section>
      </>
    );
  }
export default Quronnashr