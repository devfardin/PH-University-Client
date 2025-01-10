import { ReactNode } from "react"

export  type TUserPaths = {
    name: string,
    path?: string,
    element?: ReactNode,
    icon?: ReactNode,
    children?: TUserPaths[],
}

export type TSidebarItem = {
    key: string,
    label: ReactNode,
    icon?: ReactNode,
    children?: TSidebarItem[]
}
export type TRoute = {
    path: string,
    element: ReactNode,
}
