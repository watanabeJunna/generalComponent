import React, { FC, ReactText } from "react"
import styled, { StyledComponentBase } from "styled-components"

interface Props {
    items: NavItem[]
}

export const NavLinkMenu: FC<Props> = props => (
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

const NavLinkMenuWrapper: StyledComponentBase<any, any> = styled.div`
    display: flex;
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