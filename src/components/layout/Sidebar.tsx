import { Menu } from 'antd'
import { sideBarItemsGenerator } from '../../utils/sidebaritemsGenerator'
import { adminpaths } from '../../routes/admin.routes'
import { Layout } from 'antd';
import React from 'react';
import logo from '../../assets/images/ph-logo.png'

const { Sider } = Layout;
interface SidebarProps {
    collapsed: boolean;
  }

const Sidebar: React.FC<SidebarProps>  = ({collapsed}) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
    {/* Add you logo Here */}

    <div className="demo-logo-vertical">
    {
      !collapsed ? <h1 style={{fontSize: '25px', color: 'white', display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '15px'}}>PH Uni</h1> : <img style={{width: 50, margin:'auto', marginTop: 15, marginBottom: 20, }} src={logo} alt="ph University logo"/>
    }
    </div>
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['Dashboard']}
      items={sideBarItemsGenerator(adminpaths, 'admin')}
    />

  </Sider>
  )
}

export default Sidebar
