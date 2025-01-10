import EnrolledCourse from "../pages/student/EnrolledCourse";
import StudentDashboard from "../pages/student/StudentDashboard";
import { UserOutlined } from '@ant-design/icons';
export const studentPaths = [
    {
        name: 'Dashboard', 
        path: 'dashboard',
        element: <StudentDashboard/>,
        icon: <UserOutlined />
    },
    {
        name: 'Enrolled course', 
        path: 'enrolled-course',
        element: <EnrolledCourse/>,
    },
]