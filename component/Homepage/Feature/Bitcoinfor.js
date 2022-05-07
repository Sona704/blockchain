/** @format */

import React, { useState } from 'react';
import style from './style.module.css';
import { Typography, Row, Col, Button } from 'antd';
import { List } from 'antd';
const { Title } = Typography;
import clsx from 'clsx';

const BitcoinFor = ({ featuredataprop }) => {
   
  const [explore, setexplore] = useState('none');
  return (
    <div className={style.rootContainer}>
      <Title>{featuredataprop.heading}</Title>
      <p
        style={{ marginTop: '20px', fontWeight: '400px', lineHeight: '30px' }}
        className='font-18'>
        {featuredataprop.subheading}
      </p>
      <Row gutter={[32, 32]}>
        {featuredataprop.data.map((each, index) => {
          return (
            <Col
              style={{ display: index > 2 && explore }}
           
              xs={24} sm={24} md={12} lg={12} xl={8}
              key={index}>
              <div className={clsx(style.blockChild, 'margin-auto')}>
                <img className={style.iconstyle} src={each.icon}></img>
                <p className='font-20 font-bold'>{each.title}</p>
                <p
                  className='font-18 margin-auto'
                  style={{ width: 'auto', padding: '10px' }}>
                  {each.des}
                </p>
              </div>
            </Col>
          );
        })}
      </Row>
      <Button
        className={style.explorebtn}
        onClick={() => {
          setexplore((prev) => {
            return prev == 'none' ? 'block' : 'none';
          });
        }}>
        Explore All Feature
      </Button>
    </div>
  );
};

export default BitcoinFor;
