import { css, FlattenSimpleInterpolation } from "styled-components"

export const Item: FlattenSimpleInterpolation = css`
    color: #5f6f81;
    opacity: 0.7;
    transition: .5s;
    &:hover {
        opacity: 1;
        color: #228aff;
    }
`