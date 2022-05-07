/** @format */

import React, { useState } from 'react';
import { Affix, Button } from 'antd';
import Link from 'next/link';
import style from './style.module.css';
import axios from 'axios';
function Header() {
  const [data, setdata] = useState({email:""})
  const handleclick=(e)=>{
    axios.post("/api/lead/register",data).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div>
      <Affix>
        <div className={style.headercontainer}>
          <div>Company logo</div>
          <div className={style.headerlist}>
         <Link href='/'><a className={style.headerItem} >Home</a></Link> 
            <a className={style.headerItem} href='calculator'>Converter </a>
            <a className={style.headerItem} href='statistics'>Statistics</a>
           
            <a className={style.headerItem} href='#footer'>Contact Us</a>
           
          </div>
          <div  className={style.inputcontainer}>
            <input placeholder='Enter Your Email' className={style.headerInput} onChange={(e)=>{
              setdata({email:e.target.value})

            }} value={data.email}></input>
          <button className={style.headerButton} onClick={handleclick} >Enquiry</button></div>
        </div>
      </Affix>
    </div>
  );
}

export default Header;
