import React, { FC, ReactText } from "react"
import styled, { css, StyledComponentBase } from "styled-components"

export const SideMenu: FC<SideMenuProps> = props => (
    <SideMenuWrapper active={props.active}>
        {
            props.items.map((item: string, c: ReactText) => (
                <MenuItem key={c}>
                    {item}
                </MenuItem>
            ))
        }
    </SideMenuWrapper>
)

const WRAPPER_WIDTH: number = 320

const SideMenuWrapper: StyledComponentBase<any, any> = styled.div<SideMenuProps>`
    width: ${WRAPPER_WIDTH}px;
    height: 100%;
    position: fixed;
    right: 0;
    z-index: 1;
    background-color: #fff;
    border: 1px solid #c6d0da;
    ${props => props.active ? css`
    transform: translateX(0px);` : css`
    transform: translateX(${WRAPPER_WIDTH}px);`}
    transition: transform .5s, width .5s;
`

const MenuItem: StyledComponentBase<any, any> = styled.div`
    padding: 22px 0 20px 42px;
    color: #5f6f81;
    border-bottom: 1px solid #c6d0da;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 18px;
    overflow: hidden;
    transition: .3s;
    &:hover {
        color: white;
    background-color: #5f6f81;
}
`