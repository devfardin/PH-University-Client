import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps } from 'antd';
const { Header, Sider, Content } = Layout;

const items: MenuProps['items'] = [
  {
    key: 'dashboard',
    label: 'Dashboard'
  },
  {
    key: 'profile',
    label: 'Profile'
  }
]

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{height:'100vh'}}>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        items={items}
      />
    </Sider>
    <Layout>
      <Header style={{ padding: 0, }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    </Layout>
  </Layout>
  )
}

export default MainLayout
