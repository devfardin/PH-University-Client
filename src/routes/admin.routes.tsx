import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AlllStudents from "../pages/admin/userManagement/AlllStudents";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import { BgColorsOutlined, ContactsOutlined, ContainerOutlined, ControlOutlined, DiffOutlined, FileAddOutlined, FileDoneOutlined, PlusSquareOutlined, SolutionOutlined, UserOutlined, WindowsOutlined } from '@ant-design/icons';

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
                name: "Academic Semester",
                path: 'all-academic-semester',
                element: <AcademicSemester/>,
                icon: <ContactsOutlined />
            },
            {
                name: "Create A. Semester",
                path: 'create-academic-semester',
                element: <CreateAcademicSemester/>,
                icon: <ContainerOutlined />
            },
            {
                name: "Academic Faculty",
                path: 'academic-faculty',
                element: <AcademicFaculty/>,
                icon: <ControlOutlined />
            },
            {
                name: "Create A. Faculty",
                path: 'create-academic-faculty',
                element: <CreateAcademicFaculty/>,
                icon: <FileAddOutlined />
            },
            {
                name: "Academic Department",
                path: 'academic-department',
                element: <AcademicDepartment/>,
                icon: <FileDoneOutlined />
            },
            {
                name: "Create A. Department",
                path: 'create-academic-department',
                element: <CreateAcademicDepartment/>,
                icon: <FileAddOutlined />
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
            {
                name: "All Student",
                path: 'all-student',
                element: <AlllStudents />,
                icon: <PlusSquareOutlined />
            },
            {
                path: 'student-detailes',
                element: <AlllStudents />,
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
];
