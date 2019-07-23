import React, { useState, FC, ReactText } from "react"
import styled, { StyledComponentBase } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { SideMenu } from "./SideMenu"

export const Nav: FC<NavProps> = props => {
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

const NavLinkMenu: FC<NavLinkMenuProps> = props => (
    <NavLinkMenuWrapper>
        {
            props.items.map((item: NavItem, c: ReactText) => (
                <NavItem
                    key={c}
                    onClick={() => location.href = item.link}
                >
                    {item.name}
                </NavItem>
            ))
        }
    </NavLinkMenuWrapper>
)

const NavWrapper: StyledComponentBase<any, any> = styled.nav`
    z-index: 0;
    background-color: white;
    padding: 0;
    margin: 0;
`

const NavLinkMenuWrapper: StyledComponentBase<any, any> = styled.div`
    display: flex;
`

const NavIconMenu: StyledComponentBase<any, any> = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`

const NavItem: StyledComponentBase<any, any> = styled.div`
    padding: 18px 32px;
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: #5f6f81;
    opacity: 0.7;
    transition: .5s;
    &:hover {
        opacity: 1;
        color: #2296ad;
    }
`

const Bars: StyledComponentBase<any, any> = styled(FontAwesomeIcon)`
    color: #228aff;
    font-size: 28px;
    padding: 17px 20px;
`