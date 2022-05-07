/** @format */

import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Footer from "../../component/Footer/Index";
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import Header from '../../component/Header/Index';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chartcontainer() {
  const [apiresponse, setapiresponse] = useState('');
  const [chartvalue, setchartvalue] = useState({ label: '', value: '' });
  useEffect(() => {
    async function getchartdatafn() {
      let response = await axios.get(
        `https://api.blockchain.info/charts/transactions-per-second?timespan=1weeks&rollingAverage=24hours&format=json&cors=true`
      );
      console.log('response', response);
      setapiresponse(response.data);
    }
    getchartdatafn();
  }, []);

  useEffect(() => {
    console.log('apiresponse', apiresponse);
    let labels = [];
    let datavalue = [];
    if (apiresponse) {
      apiresponse?.values?.map((each, index) => {
        labels.push(each.x);
        datavalue.push(each.y);
      });
    }
    console.log('l', labels);
    console.log('v', datavalue);
    setchartvalue({ label: labels, value: datavalue });
  }, [apiresponse]);

  
  const data = {
    labels: chartvalue.label,
    datasets: [
      {
      
        label: 'Transaction Rate',
        data: chartvalue.datavalue,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',

        borderColor: 'rgba(255, 99, 132, 1)',

        borderWidth: 2,
      },
    ],
  };

  return (<div><Header/>
  
  
  <div> <p className='font-32 font-bold center margin-40' >{apiresponse.description}</p> <Bar data={data} /></div>
 <Footer/></div>);
}
export default Chartcontainer;
