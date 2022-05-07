/** @format */

import React from 'react';
import style from './style.module.css';

import { List, Typography, Divider, Row, Col, Button } from 'antd';
const Offeringblock = ({order,   heading, description,img}) => {
  console.log("ah",typeof order)
  return (
    <Row style={{ marginTop:"40px",backgroundColor:"#FFFFFF"}}>
      <Col order={order[0]}    xs={24} sm={24} md={24} lg={16} xl={16} >
        <div className={style.offerbox}>
          <h1 style={{color:"#0f62fc"}}>{heading}</h1>
          <p>
           {description}
          </p>
          <Button className={style.buttonstyle}>know more</Button>
        </div>
      </Col>
      <Col   order={order[1]}    xs={24} sm={24} md={24} lg={8} xl={8} >
      <img  className={style.imgstyle}src={img}></img>
      </Col>
    </Row>
  );
};

export default Offeringblock;
