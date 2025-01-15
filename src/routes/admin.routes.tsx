import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { BgColorsOutlined, CreditCardTwoTone, DiffOutlined, PlusSquareOutlined, SolutionOutlined, UserOutlined, WindowsOutlined } from '@ant-design/icons';

export const adminpaths = [
    {
        name: "Dashboard",
        path: 'dashboard',
        element: <AdminDashboard />,
        icon: <WindowsOutlined />,
    },
    {
        name: 'Academic Management',
        icon:  <BgColorsOutlined />,
        children: [
            {
                name: "All Academic Semester",
                path: 'all-academic-semester',
                element: <AcademicSemester/>,
                icon: <CreditCardTwoTone/>
            },
        ]
    },
    {
        name: 'User Management',
        icon: <PlusSquareOutlined />,
        children: [
            {
                name: "Create Admin",
                path: 'create-admin',
                element: <CreateAdmin />,
                icon: <DiffOutlined />
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
                icon: <PlusSquareOutlined />
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