import { useAuth } from "hooks/useAuth";
import { Item, LinksList, StyledNavLink } from "./Navigation.styled";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    
    return (
        <nav>
            <LinksList >
                <Item><StyledNavLink to="/">Home</StyledNavLink></Item>
                {isLoggedIn && <Item><StyledNavLink to="/contacts">Contacts</StyledNavLink></Item>}
            </LinksList>
        </nav>
    );
};