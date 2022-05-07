

import React from 'react';
import { Carousel } from 'antd';
import style from './style.module.css';

import { Row, Col, Button } from 'antd';
const Index = () => {
  const data = [
    {
      heading: 'PRIVATE KEYS',
      subheading:
        'The most-used cryptographic software in the world',
      featurepoint: [
        ' Client-side private key management is not unique to Blockchain.com, but at our scale is the most-used cryptographic tool in the hands of millions',
        'If you own your private keys, you own your crypto',
        'Zero knowledge proofs and private key management are the foundation of cryptocurrency',
      ],
      img: '../../../homepage/advantage/1_lP9wvVzSJbuTggCGTCOiuA.png',
    },
    {
      heading: 'PRIVACY AND TRUST',
      subheading:
        'We help you keep your crypto and your data secure',
      featurepoint: [
        'We do not track non-custodial funds held in Private Key Wallets, we only keep track of funds in Accounts that are custodied by Blockchain.com',
        ' All Personally Identifiable Information is stored in Google Cloud Platform, secured by best in class digital security.',
        'Our compliance team ensures that we follow and are compliant with AML and KYC regulations globally so that you can trust Blockchain.com and any counterparty',
      ],
      img: '../../../homepage/advantage/1_lP9wvVzSJbuTggCGTCOiuA.png',
    },
    {
      heading: 'AES-256 ENCRYPTION',
      subheading:
        'Secure software on desktop and mobile.',
      featurepoint: [
        ' The Wallet and Exchange both support 2FA, use AES-256 encryption, and private keys for custodied funds are stored in FIPS 140-2 certified devices',
        ' Blockchain.com enforces TLS 1.2 for Internet-facing applications and audits support cypher periodically',
        'Strong cyphers are used to enforce storage encryption across the cloud and physical facilities',
      ],
      img: '../../../homepage/advantage/1_lP9wvVzSJbuTggCGTCOiuA.png',
    },
    {
      heading: 'COLD STORAGE',
      subheading:
        '95% of all funds are stored in offline cold wallets',
      featurepoint: [
        'Distributed across the world in hyper secure facilities in locations that specialize in physically securing valuable items',
        'Multi-signature validation means that no one can unilaterally access funds. Not our CEO. Not the Queen of England',
        'Private keys don’t leave Hardware Security Modules where funds are stored, a cryptographic best practice',
      ],
      img: '../../../homepage/advantage/1_lP9wvVzSJbuTggCGTCOiuA.png',
    },
  ];

  return (
    <div style={{ marginTop: '60px' }}>
      <style jsx global>
        {`
          .ant-carousel .slick-dots li.slick-active button {
            height: 20px;
            border-radius: 50%;
            width: 24px;
          }

          .ant-carousel .slick-dots li button {
            height: 20px;
            border-radius: 50%;
            width: 24px;
          }
          .ant-carousel .slick-dots li{
            margin-right: 18px;
            margin-left:20px;
            height: 30px;
        
          }
          .ant-carousel .slick-dots li.slick-active {
            width:16px
          }
        `}
      </style>
      <Carousel  dots={true} effect="scrollx"
      
      className='homepage'>
        {data.map((item, index) => {
          return (
            <div key={index} className={style.rootcontainer}>
              <h1 className='font-32 font-bold text-white margin-buttom-20'>
              Get peace of mind with world-class security
              </h1>
              <Row style={{ marginTop: '6%' }}>
                <Col lg={12}>
                  <h1 className={style.heading}>{item.heading}</h1>
                  <p className={style.subheading}>{item.subheading}</p>
                  <ul>
                    {item.featurepoint.map((each, i) => {
                      return (
                        <li className={style.listitem} key={i}>
                          {each}
                        </li>
                      );
                    })}
                  </ul>
                </Col>
                <Col lg={12}>
                  <img
                    style={{ width: '400px', height: '300px', margin: 'auto' }}
                    src={item.img}></img>
                </Col>
              </Row>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Index;
