import { useState } from 'react'
import {
  CloseOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import logo from '../../assets/react.svg'
import { Outlet } from 'react-router';
import { adminSidebarItems } from '../../routes/admin.routes';


const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{height:'100vh'}}>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      {/* Add you logo Here */}

      <div className="demo-logo-vertical">
        {
          !collapsed ? <h1 style={{fontSize: '25px', color: 'white', display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '15px'}}>PH Uni</h1> : ''
        }
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        items={adminSidebarItems}
      />
    </Sider>
    <Layout>
      <Header style={{ padding: 0, paddingRight: 10,  background: 'white', borderRadius: 6, margin:10, display: 'flex', justifyContent: 'space-between' }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <CloseOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
            color: 'black',
            display: 'flex',
            alignItems: 'center',
          }}
        />
        <img style={{width: 64, height: 64, borderRadius: 100, }} src={logo} alt="" />
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <Outlet/>
      </Content>
    </Layout>
  </Layout>
  )
}

export default MainLayout
