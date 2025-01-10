import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { CreditCardTwoTone, PlusSquareOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';

export const adminpaths = [
    {
        name: "Dashboard",
        path: 'dashboard',
        element: <AdminDashboard />,
        icon: <UserOutlined />,
    },
    {
        name: 'User Management',
        icon: <PlusSquareOutlined />,
        children: [
            {
                name: "Create Admin",
                path: 'create-admin',
                element: <CreateAdmin />,
                icon: <CreditCardTwoTone/>
            },
            {
                name: "Create Faculty",
                path: 'create-faculty',
                element: <CreateFaculty />,
                icon: <SolutionOutlined />
                
            },
            {
                name: "Create Student",
                path: 'create-student',
                element: <CreateStudent />,
            },
        ]
    },
    {
        name: "Profile",
        path: 'profile',
        element: <AdminDashboard />,
        icon: <UserOutlined />,
    },
]