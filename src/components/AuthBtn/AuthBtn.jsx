import { StyledAuthBtn } from "./AuthBtn.styled"

export const AuthBtn = ({ children }) => {
    return <StyledAuthBtn type="submit">{children}</StyledAuthBtn>;
};