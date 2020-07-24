import React, { useState } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
 
} from '@ant-design/icons';
import Add from './component/add';
const logo = require('./assets/logo.png');

const { Header, Sider, Content } = Layout;

function App() {
  const [collapse, setCollapse] = useState(false);


  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapse}>
        <div className="logo">
          <img src={logo} height={40} />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Sum Calculator
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapse((collapse) => !collapse),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Add/>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
