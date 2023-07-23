import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const LinksList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Item = styled.li`
    &:not(:last-child){
        margin-right: 24px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    font-family: 'Libre Baskerville', serif;
    &.active {
        color:#3b1d5e;
        border-bottom: 2px solid #3b1d5e; 
    }
`;

