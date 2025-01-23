import { TSidebarItem, TUserPaths } from "../types"
import { NavLink } from "react-router"

export const sideBarItemsGenerator = (items: TUserPaths[], role: string) => {
    const adminSidebarItems = items.reduce((acc: TSidebarItem[], item) => {
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                icon: item.icon,
                label: <NavLink to={`/${role}/${item.path}`}> {item.name} </NavLink>,
            })
        }
        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                icon: item.icon,
                children: item.children.map((child) => {
                    if(child.name) {
                        return {
                            icon: child.icon,
                            key: child.name,
                            label: <NavLink to={`/${role}/${child.path}`}> {child.name} </NavLink>,
                        }
                    }
                })
            })
        }
        return acc;
    }, [])
    return adminSidebarItems;
}