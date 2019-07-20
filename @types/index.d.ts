interface NavItem {
    name: string;
    link?: string;
}

interface SideMenuProps {
    active: boolean
    items: string[]
}

interface NavProps {
    navMenuItems: NavItem[]
    sideMenuItems: string[]
}

interface NavLinkMenuProps {
    items: NavItem[]
}