/** @format */

import React from 'react';
import Advantage from '../component/Homepage/Advantage/Index';
import Header from '../component/Header/Index';
import Coverpage from '../component/Homepage/Coverpage/Index.js';
import Feature from '../component/Homepage/Feature/Index';
import Footer from '../component/Footer/Index';
import Offer from '../component/Homepage/Offering/Index';

const Home = () => {
  return (
    <div>
      <Header></Header>
     <Coverpage></Coverpage>
<Offer></Offer>
      <Advantage></Advantage>
       <Feature></Feature>

      <Footer></Footer>  
     
    </div>
  )
};

export default Home;
