import { Menu } from 'antd'
import { sideBarItemsGenerator } from '../../utils/sidebaritemsGenerator'
import { adminpaths } from '../../routes/admin.routes'
import { Layout } from 'antd';
import React from 'react';
import logo from '../../assets/images/ph-logo.png'
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';

const { Sider } = Layout;
interface SidebarProps {
    collapsed: boolean;
  }

  const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
  }

const Sidebar: React.FC<SidebarProps>  = ({collapsed}) => {
  const role = 'admin';
  let sidebarItems;
  switch (role) {
    case userRole.ADMIN: 
    sidebarItems = sideBarItemsGenerator(adminpaths, userRole.ADMIN);
    break;
    case userRole.FACULTY:
    sidebarItems = sideBarItemsGenerator(facultyPaths, userRole.FACULTY);
    break;
    case userRole.STUDENT:
    sidebarItems = sideBarItemsGenerator(studentPaths, userRole.STUDENT);
    break;
    default:
      break;
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
    {/* Add you logo Here */}

    <div className="demo-logo-vertical">
    {
      !collapsed ? <h1 style={{fontSize: '25px', color: 'white', display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '15px'}}>PH Uni</h1> : <img style={{maxWidth: 50, display: 'flex', margin: 'auto', marginTop: 15, marginBottom: 15 }} src={logo} alt="ph University logo"/>
    }
    </div>
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['Dashboard']}
      items={sidebarItems}
    />

  </Sider>
  )
}

export default Sidebar
