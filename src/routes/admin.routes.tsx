import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router";

type TRoute = {
    path: string,
    element: ReactNode,
}
type TSidebarItem = {
    key: string,
    label: ReactNode,
    children?: TSidebarItem[]

}
const adminpaths = [
    {
        name: "Dashboard",
        path: '/admin/dashboard',
        element: <AdminDashboard />,
    },
    {
        name: 'User Management',
        children: [
            {
                name: "Create Admin",
                path: 'create-admin',
                element: <CreateAdmin />,
            },
            {
                name: "Create Faculty",
                path: 'create-faculty',
                element: <CreateFaculty />,
            },
            {
                name: "Create Student",
                path: 'create-student',
                element: <CreateStudent />,
            },
        ]
    }
]

// Programatical way handle for routes
export const adminRoutes = adminpaths.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element,
        })
    }
    if (item.children) {
        item.children.forEach((child) => {
            acc.push({
                path: child.path,
                element: child.element,
            })
        })
    }
    return acc;
}, [])

// Create Admin sidebar item
export const adminSidebarItems = adminpaths.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
        acc.push({
            key: item.name,
            label: <NavLink to={`${item.path}`}> {item.name} </NavLink>,
        })
    }
    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map((child) => ({
                key: child.name,
                label: <NavLink to={`/admin/${child.path}`}> {child.name} </NavLink>,
            }))
        })
    }
    return acc;
}, [])