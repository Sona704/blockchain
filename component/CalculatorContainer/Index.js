/** @format */

import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './style.module.css';

function Index() {
  const [convertdata, setconvertdata] = useState({
    currency: 'ARS',
    value: '',
    convertdataresponse: '',
  });
  const [currencysymbol, setcurrencysymbol] = useState([]);
  useEffect(() => {
    const getCurrencyvalue = async () => {
      let response = await axios.get(
        'https://blockchain.info/ticker?cors=true'
      );
      let symbol = Object.keys(response.data);

      setcurrencysymbol(symbol);
    };
    getCurrencyvalue();
  }, []);

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log('convertdata9', convertdata);
    const getconvertvalue = async () => {
      let response = await axios.get(
        `https://blockchain.info/tobtc?currency=${convertdata.currency}&value=${convertdata.value}`
      );
      console.log('response', response.data);
      setconvertdata({
        ...convertdata,
        convertdataresponse: response.data,
       
      });
    };
    getconvertvalue();
  }

  return (
    <div style={{margin:"40px"}}>
      <div className={style.center}>
        <div className={style.formcontainer}>
          <div style={{margin:"40px"}}>
            
            <h1 className={style.heading} >Bitcoin Price Calculator</h1>
            <p  className={style.subheading}>{`Use Paxful's Bitcoin calculator to find out exactly how much your Bitcoin is worth in any of the supported global currencies, using accurate, up-to-date exchange rates. Get real-time and historical trends in the BTC value for your selected currency.`}</p>
          </div >
          <div className={style.imgstyle}> <img  src='../../crypto_calc.svg'></img></div>
         
        </div>
      </div>
      <div className={style.calbox}>
        <form onSubmit={handleFormSubmit}>
          <div className={style.formcontainer}>
            <div className={style.flexchild}>
              <label className={style.inputlabel} htmlFor='value'>
                Enter the Value
              </label>
              <input
                className={style.inputbox}
                required
                value={convertdata.value}
                onChange={(e) => {
                  setconvertdata({ ...convertdata, value: e.target.value });
                }}
                name='value'
                type='number'></input>
            </div>
            <div className={style.flexchild}>
              <label className={style.inputlabel} htmlFor='currency'>
                {' '}
                Select the Currency
              </label>
              <select
                className={style.inputbox}
                required
                value={convertdata.currency}
                onChange={(e) => {
                  setconvertdata({ ...convertdata, currency: e.target.value });
                }}
                name='currency'
                id='currency'>
                {currencysymbol.map((each, index) => {
                  return (
                    <option key={index} value={each}>
                      {each}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={style.center}>
            <button className={style.submitbtn} type='submit'>
              Calculate
            </button>
          </div>
        </form>
        <div className={style.result}>
          <h1 className={style.center}>{convertdata.convertdataresponse}</h1>
        </div>
      </div>
     
    </div>
  );
}

export default Index;
