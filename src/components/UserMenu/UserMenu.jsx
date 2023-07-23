import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { Greeting, LogOutBtn, UserContainer } from "./UserMenu.styled";
import { toast } from "react-hot-toast";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogOut = () => {
        dispatch(logOut())
            .unwrap()
            .then(() => toast.success(`Bye! Visit us again :)`))
            .catch(() => toast.error('Something went wrong. Try again, please!'));
    };

    return (
        <UserContainer>
            <Greeting>Welcome, {user.name}</Greeting>
            <LogOutBtn onClick={handleLogOut}>Log Out</LogOutBtn>
        </UserContainer>
    );
};