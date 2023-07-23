import { ErrorMessage } from "formik"
import { StyledErrMsg } from "./ErrorMsg.styled"

export const ErrorMsg = ({ name }) => {
    return <ErrorMessage name={name} render={message => <StyledErrMsg>{message}</StyledErrMsg>} />;
};