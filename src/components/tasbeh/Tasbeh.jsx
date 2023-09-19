import React, { useState } from "react";
import "./tasbeh.scss";
const Tasbe = () => {
  const [counter, setCounter] = useState(33);
  const [counterr, setCounterr] = useState(0);
  const [counterr1, setCounterr1] = useState(0);

  const inc = () => {
    if (counter === 33) {
      setCounter(99);
    } else {
      setCounter(33);
    }
  };

  const incc = () => {
    setCounterr(counterr + 1);
    setCounterr1(counterr1 + 1);
    if (counterr === counter) {
      setCounterr(0);
    }
  };

  const res = () => {
    setCounterr1(0);
    setCounterr(0);
  };

  return (
    <>
      <section>
        <div className="quron-wrap">
          <div className="quron-itme"></div>

          <div className="quran">
            <div className="tasbeh-w">
              <div className="tasbeh">
                <div className="son" onClick={inc}>
                  {counter}
                </div>
                <div className="son1" onClick={res}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
                  </svg>
                </div>
                <div className="res"> </div>
                <div className="jami">
                  {counterr}/{counter}
                </div>
                <div className="jami-n">Jami: {counterr1} </div>
              </div>
              <div className="tasbeh1">
                <div className="tasbeh-btn-w">
                  <button className="tasbeh-btn" onClick={incc}>
                    {counterr}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tasbe;
