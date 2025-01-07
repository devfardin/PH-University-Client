import { createBrowserRouter } from "react-router";
import App from "../App";
import { adminPaths } from "./admin.routes";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/admin',
        element: <App/>,
        children: adminPaths,
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }

]);
export default router;