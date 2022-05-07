/** @format */

import React, { useState } from 'react';
import { Affix, Button, Drawer,List } from 'antd';
import Link from 'next/link';
import style from './style.module.css';
import { MenuOutlined } from "@ant-design/icons";
import axios from 'axios';
function Header() {
  const [data, setdata] = useState({ email: '' });
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const handleclick = (e) => {
    // axios.post("/api/lead/register",data).then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    console.log('e', e);
  };
  const headerlist=[
    {
      title:"Home",
      herf:"/"
    },
    {
      title:"Converter",
      herf:"calculator"
    },
    {
      title:"Statistics",
      herf:"statistics"
    },
    {
      title:" Contact Us",
      herf:"#footer"
    },
  ]

  return (
    <div>
      <Affix>
        <div className={style.headercontainer}>
          <div>Company logo</div>
          <div className={style.headerlist}>
          {headerlist.map((each,index)=>{
            return( <Link href={each.herf} key={index}>
            <a className={style.headerItem}>{each.title}</a>
          </Link>)
          })}
         

          </div>
          <div className={style.inputcontainer}>
            <input
              placeholder='Enter Your Email'
              className={style.headerInput}
              onChange={(e) => {
                setdata({ email: e.target.value });
              }}
              value={data.email}></input>
            <button className={style.headerButton} onClick={handleclick}>
              Enquiry
            </button>
          </div>
          <div className={style.drawerdisplay}>
       
				<Button
					
					type="default"
					icon={<MenuOutlined />}
					onClick={() => setDrawerVisible(true)}
					shape="circle"
					size={"large"}
				/>
          <Drawer
        
            title='Bitcoin '
            width={200}
            placement='right'
            onClose={onClose}
            bodyStyle={{ padding: "20px" }}
            visible={drawerVisible}>
              	<List
					itemLayout="horizontal"
					dataSource={headerlist}
					renderItem={(item) => (
						<List.Item>
							<List.Item.Meta
								title={
									<div style={{ fontSize: "16px" }}>
										<Link href={item.herf} passHref>
											{item.title}
										</Link>
									</div>
								}
							/>
						</List.Item>
					)}
				/>
           
          </Drawer>
        </div>
        </div> 
      </Affix>
    </div>
  );
}

export default Header;
