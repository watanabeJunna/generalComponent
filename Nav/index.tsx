import React, { useState, FC } from "react"
import styled, { StyledComponentBase } from "styled-components"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { NavLinkMenu } from "./NavLinkMenu"
import { NavIconMenu, Bars } from "./NavIconMenu"
import { SideMenu } from "./SideMenu"

type Props = {
    navMenuItems: NavItem[]
    sideMenuItems: string[]
}

export const Nav: FC<Props> = props => {
    const [active, setActive] = useState(false)

    return <>
        <NavWrapper>
            <NavLinkMenu
                items={props.navMenuItems}
            />
            <NavIconMenu onClick={() => setActive(!active)} >
                <Bars icon={faBars} />
            </NavIconMenu>
        </NavWrapper>
        <SideMenu
            active={active}
            items={props.sideMenuItems}
        />
    </>
}

const NavWrapper: StyledComponentBase<any, any> = styled.nav`
    z-index: 0;
    background-color: white;
    padding: 0;
    margin: 0;
`