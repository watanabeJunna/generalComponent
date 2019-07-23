import styled, { StyledComponentBase } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NavIconMenu: StyledComponentBase<any, any> = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`

export const Bars: StyledComponentBase<any, any> = styled(FontAwesomeIcon)`
    color: #228aff;
    font-size: 28px;
    padding: 17px 20px;
`