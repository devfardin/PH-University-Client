import { useState } from 'react'
import {
  CloseOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout } from 'antd';
const { Header, Content } = Layout;
import logo from '../../assets/react.svg'
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logOut } from '../../redux/features/auth/authSlice';
import { toast } from 'sonner'
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useAppDispatch();

  // Logout function handle
  const handleLogOut = () => {
    dispatch(logOut());
    toast('Logout Succesfull')
  }
  return (
    <Layout style={{height:'100vh'}}>
   <Sidebar collapsed={collapsed}/>
    <Layout>
      <Header style={{ padding: 0, paddingRight: 10,  background: 'white', borderRadius: 6, margin:10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
        <Button onClick={handleLogOut}>Log Out</Button>
        <img style={{width: 64, height: 64, borderRadius: 100, }} src={logo} alt="" />
      </Header>
      <Content
        style={{
          margin: '24px 16px',
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
