import React, { useState } from 'react';
import { RxCaretRight } from "react-icons/rx";
import { RxCaretLeft } from "react-icons/rx";

import { CiGrid42 } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { AiFillReconciliation } from "react-icons/ai";
import { PiCaretDownBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";

import {useNavigate} from "react-router-dom";
import TabsForm from "./TabsForm";
import logo from "../components/assets/logo.png"
import logo_title from "../components/assets/logo_title.png"
import csdb from '../components/assets/CSDB-lite.png'
import { Layout, Menu, Button, theme } from 'antd';
import MultiStepForm from './dummy/MultiStepForm';
const { Header, Sider, Content } = Layout;


const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <img src={logo_title} alt="Logo_title"/>
        </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
            if(key == "signout"){

            }else{
                navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <CiGrid42 />,
              label: 'Dashboard',
            },
            {
              key: 'home',
              icon: <AiFillHome />,
              label: 'Home',
              children:[
                {
                    key: 'atags',
                    icon: <PiCaretDownBold />,
                    label: 'ATAGS', 
                    children:[
                        {
                            key: 'system-config',
                            icon: <PiCaretRightBold />,
                            label: 'System Configuration',  
                        },
                        {
                            key: 'upper-carriage',
                            icon: <PiCaretRightBold />,
                            label: 'Upper Carriage',  
                        },
                        {
                            key: 'upper-carriage',
                            icon: <PiCaretRightBold />,
                            label: 'Under Carriage',  
                        },
                        {
                            key: 'power-unit',
                            icon: <PiCaretDownBold />,
                            label: 'Power Unit',  
                            children:[
                                {
                                    key: 'servo',
                                    icon: <PiCaretRightBold />,
                                    label: 'Servo Motor and Junction Box'
                                },
                                {
                                    key: 'design',
                                    icon: <PiCaretRightBold />,
                                    label: 'Designs & Functions'
                                }
                            ]
                        }
                    ]
                }
              ]
            },
            {
              key: 'project',
              icon: <AiFillReconciliation />,
              label: 'Project',
            },
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header className='d-flex justify-content-between'
          style={{
            padding: 0,
            background: colorBgContainer,
            height:'70px'
          }}
          
        >
          
          <Button className='toggle '
            type="text"
            icon={collapsed ? <RxCaretRight /> : <RxCaretLeft />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize:'16px',
              width: 29,
              height: 38,
              backgroundColor: 'rgba(255, 188, 14, 1)',
              color: 'white',
              marginTop: 10,
              alignItems:'center',
              
            }}
          />

          <div className=''>
            <img src={csdb} className='img-fluid header_margin'/>
          </div>
        </Header>
        <Content
          style={{
            margin: '',
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* <TabsForm/> */}
          <MultiStepForm/>
        </Content>
        
      </Layout>
    </Layout>
  );
};
export default MainLayout;