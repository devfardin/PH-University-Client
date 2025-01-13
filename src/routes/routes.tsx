import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routeGenerator } from "../utils/routesGenerator";
import { adminpaths } from "./admin.routes";
import NotFound from "../pages/NotFound";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/admin',
        element:  <App/>,
        children: routeGenerator(adminpaths),
    },
    {
        path: '/faculty',
        element: <App/>,
        children: routeGenerator(facultyPaths),
    },
    {
        path: '/student',
        element: <App/>,
        children: routeGenerator(studentPaths),
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '*',
        element: <NotFound/>
    }

]);
export default router;