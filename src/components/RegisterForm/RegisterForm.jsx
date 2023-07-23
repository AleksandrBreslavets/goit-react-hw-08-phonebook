import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from 'yup';
import { register } from "redux/auth/operations";
import { Input, Label, StyledForm } from "./RegisterForm.styled";
import { AuthBtn } from "components/AuthBtn/AuthBtn";
import { ErrorMsg } from "components/ErrorMsg/ErrorMsg";
import { toast } from "react-hot-toast";

const initialValues = {
    name: '',
    email: '',
    password: '',
};

const schema = yup.object().shape({
    name: yup
        .string()
        .required(),
    email: yup
        .string()
        .email("Email is invalid")
        .required(),
    password: yup
        .string()
        .min(7, "Password is too short, it must contains at least 7 symbols!")
        .max(14, "Password is too long!")
        .required(),
});

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(register(values))
            .unwrap()
            .then(() => toast.success(`Registration is successful!`))
            .catch(() => toast.error('Something went wrong. Try again, please!'));
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            <StyledForm>
                <Label>Name
                    <Input type="text" name="name" />
                    <ErrorMsg name={'name'} />
                </Label>
                <Label>Email
                    <Input type="email" name="email" />
                    <ErrorMsg name={'email'} />
                </Label>
                <Label>Password
                    <Input type="password" name="password" />
                    <ErrorMsg name={'password'} />
                </Label>
                <AuthBtn>Register</AuthBtn>
            </StyledForm>
        </Formik>
    );
};