/** @format */

import React from 'react';
import {
  InstagramFilled,
  TwitterCircleFilled,
  FacebookFilled,
  LinkedinFilled,
  CopyrightOutlined,
} from '@ant-design/icons';
import { List, Typography, Divider, Row, Col } from 'antd';


const Index = () => {
  const Followus = [
    {
      icon: <InstagramFilled style={{ fontSize: '30px' }} fill='#FFFFFF' />,
      link: 'https://www.instagram.com/',
    },
    {
      icon: <TwitterCircleFilled style={{ fontSize: '30px' }} />,
      link: 'https://twitter.com/aligntogether',
    },
    {
      icon: <FacebookFilled style={{ fontSize: '30px' }} />,
      link: 'https://www.facebook.com/pages/category/Software-Company/AlignTogether-Solutions-102519281558511/',
    },
    {
      icon: <LinkedinFilled style={{ fontSize: '30px' }} />,
      link: 'https://in.linkedin.com/company/aligntogether-solutions',
    },
  ];
  const OtherLinks = [
    {
      name: 'Privacy Policy',
      link: '#',
    },
    {
      name: 'Terms & Conditions',
      link: '#',
    },
    {
      name: 'Team',
      link: '#',
    },
    {
      name: 'About us',
      link: '#',
    },
    {
      name: 'Blog',
      link: '#',
    },
    {
      name: 'Converter',
      link: 'calculator',
    },
  ];
  
 
   
  return (
    <div id="footer">
      <div style={{backgroundColor:"#060a32", marginTop:"80px",padding:"20px"}}>
        <Row>
          <Col className='text-white'  lg={8} sm={8} xs={8} md={8}>
            <div>
              <p className='margin-20'>Company Logo</p>
            </div>
           

          
          </Col>
     
          <Col  lg={8} sm={8} xs={8} md={8}>
            <List
              dataSource={OtherLinks}
              renderItem={(item) => (
                <List.Item>
             
                    <a
                     href={item.link}
                      style={{
                        color: 'white',
                        fontSize: '16px',
                      }}>
                      {item.name}
                    </a>
                 
                </List.Item>
              )}
            />
          </Col>

          <Col  lg={8} sm={8} xs={8} md={8}> <List
             
             size='large'
             itemLayout='horizontal'
             bordered={false}
             dataSource={Followus}
             renderItem={(item) => (
               <List.Item
                 style={{
                   display: 'inline',
                   marginTop:"40px"
                   
                 }}>
                  <a className='text-white' href={item.link}>{item.icon}</a>
              
               </List.Item>
             )}
           />
             <div   className='margin-40 text-white'>
              <p className='margin-20'>Company Name</p>
              <p className='margin-10'>Powered by company pvt ltd</p>
              <p  className='margin-10' >
                xxxxx xxxx, xxxx 107, xxx-50 xxxxxx xxxxx, xxxxxxxx,
                xxxxx-55622
              </p>
            </div></Col>
        </Row>
        <Row>
        <Col
            lg={24}
            sm={24}
            xs={24}
            md={24}
            style={{
              color: '#ffffff',
              fontSize: '18px',
              marginTop:"40px"
             
            }}>
            <CopyrightOutlined />
            <p style={{ display: 'inline' }}>Company.Name</p>
            <span>2022</span>
          </Col>
          </Row>
      </div>
    </div>
  );
};

export default Index;
