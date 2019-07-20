import React from "react"
import styled, { css } from "styled-components"

const WRAPPER_WIDTH = 320

export const SideMenu = props => {
    return (
        <SideMenuWrapper active={props.active}>
            {
                props.items.map((e, c) => {
                    return (
                        <MenuItem key={c}>
                            {e}
                        </MenuItem>
                    )
                })
            }
        </SideMenuWrapper>
    )
}

const SideMenuWrapper = styled.div`
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

const MenuItem = styled.div`
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