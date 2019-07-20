import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { SideMenu } from "./SideMenu"

export const Nav = props => {
    const [active, setActive] = useState(false)

    return <>
        <NavWrapper>
            <NavLinkMenu
                items={props.navMenuItems}
            />
            <NavIconMenu onClick={e => setActive(!active)} >
                <Bars icon={faBars} />
            </NavIconMenu>
        </NavWrapper>
        <SideMenu
            active={active}
            items={props.sideMenuItems}
        />
    </>
}

const NavLinkMenu = props => {
    return <NavLinkMenuWrapper>
        {
            props.items.map((item, c) => (
                <NavItem
                    key={c}
                    onClick={e => location = item.link}
                >
                    {item.name}
                </NavItem>
            ))
        }
    </NavLinkMenuWrapper>
}

const NavWrapper = styled.nav`
    z-index: 0;
    background-color: white;
    border-bottom: 1px solid #c6d0da;
    padding: 0;
    margin: 0;
`

const NavLinkMenuWrapper = styled.div`
    display: flex;
`

const NavIconMenu = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`

const NavItem = styled.div`
    padding: 18px 32px;
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: #5f6f81;
    border-right: 1px solid #c6d0da;
    &:hover {
        color: white;
        background-color: #5f6f81;
    }
`

const Bars = styled(FontAwesomeIcon)`
    color: #09aaff;
    font-size: 28px;
    padding: 17px 20px;
    border: 1px solid #c6d0da;
`