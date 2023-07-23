import { Item, LinksList, StyledNavLink } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
        <nav>
            <LinksList>
                <Item><StyledNavLink to="/register">Register</StyledNavLink></Item>
                <Item><StyledNavLink to="/login">Log In</StyledNavLink></Item>
            </LinksList>
        </nav>
    );
};