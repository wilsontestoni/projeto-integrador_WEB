import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkAnimated = styled(Link)`
    display: inline-block;
    color: #BADEFF;
    font-weight: bold;
    position: relative;
    transition: 0.5s;
    cursor: pointer;
    &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 2px;
        top: 100%;
        left: 0;
        transition: transform 0.5s;
        transform: scaleX(0);
        transform-origin: right;
        background-color: #BADEFF;
        margin-top: -2px;
        border-radius: 6px;
    }
    &:hover {
        color: #BADEFF;
        text-decoration: none;
    }
    &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
`

