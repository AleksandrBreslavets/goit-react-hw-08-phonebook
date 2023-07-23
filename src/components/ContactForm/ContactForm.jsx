import toast from 'react-hot-toast';
import {Label, Input, Button, FormWrap} from "./ContactForm.styled";
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {Formik } from 'formik';
import * as yup from 'yup';
import { ErrorMsg } from 'components/ErrorMsg/ErrorMsg';

const initialValues = {
    name: '',
    number: '',
};

const schema = yup.object().shape({
    name: yup
        .string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces.For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
        .trim()
        .required(),
    number: yup
        .string()
        .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")
        .trim()
        .required(),
});

export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm}) => {
        if (contacts.findIndex(contact => values.name === contact.name) === -1) {
            dispatch(addContact(values));
        }
        else toast.error(`${values.name} is already in contacts`);
        resetForm();
    };
    
    return (
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
                <FormWrap>
                    <Label>Name
                        <Input type="text" name="name" />
                        <ErrorMsg name={'name'} />
                    </Label>
                    <Label>Number
                        <Input type="tel" name="number" />
                       <ErrorMsg name={'number'} /> 
                    </Label>
                    <Button type="submit">Add contact</Button>
                </FormWrap>
            </Formik>
    );
};