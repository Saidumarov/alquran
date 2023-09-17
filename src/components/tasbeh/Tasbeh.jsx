import React, { useState } from "react";
import "./tasbeh.scss";
const Tasbe = () => {

  const [ counter , setCounter ] =useState(33)
  const [ counterr , setCounterr ] =useState(0)
  const [ counterr1 , setCounterr1 ] =useState(0)


  const inc = () =>{
    if ( counter === 33) {
      setCounter(99)
    }else{
      setCounter(33)
    }
  }
  
  const incc = () =>{
    setCounterr(counterr + 1)
    setCounterr1(counterr1 + 1)
    if (counterr === counter) {
      setCounterr(0)
    }
  }

  return (
    <>
      <section>
        <div className="quron-wrap">
          <div className="quron-itme"></div>

          <div className="quran">
            <div className="tasbeh-w">
              <div className="tasbeh">
              <div className="son" onClick={inc}>{counter} </div>
              <div className="res"> </div>
              <div className="jami">{counterr}/{counter}</div>
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
