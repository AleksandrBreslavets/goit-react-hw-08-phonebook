import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from 'yup';
import { logIn } from "redux/auth/operations";
import { ErrorMsg } from "components/ErrorMsg/ErrorMsg";
import { Input, Label, StyledForm } from "./LoginForm.styled";
import { AuthBtn } from "components/AuthBtn/AuthBtn";
import { toast } from "react-hot-toast";

const initialValues = {
    email: '',
    password: '',
};

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email is invalid")
        .required(),
    password: yup
        .string()
        .min(7, "Password is too short!")
        .max(14, "Password is too long!")
        .required(),
});

export const LoginForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = (values, { resetForm }) => {
        dispatch(logIn(values))
            .unwrap()
            .then(() => toast.success(`Authorization is successful!`))
            .catch(() => toast.error('Email or password is wrong. Check it again!'));
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            <StyledForm>
                <Label>Email
                    <Input type="email" name="email" />
                    <ErrorMsg name={'email'} />
                </Label>
                <Label>Password
                    <Input type="password" name="password" />
                    <ErrorMsg name={'password'} />
                </Label>
                <AuthBtn>Log in</AuthBtn>
            </StyledForm>
        </Formik>
    );
};