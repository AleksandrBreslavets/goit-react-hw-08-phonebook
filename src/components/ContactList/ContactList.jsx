import { useSelector } from 'react-redux';
import {selectVisibleContacts } from 'redux/contacts/selectors';
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactsList } from "./ContactList.styled";

export const ContactList = () => {
    const filteredContacts = useSelector(selectVisibleContacts);

    if (filteredContacts.length) {
        return (
        <ContactsList>
            {filteredContacts.map(({ name, number, id }) => <ContactItem
                key={id}
                name={name}
                number={number}
                id={id}>
            </ContactItem>)}
        </ContactsList>);
    }
    return null;
};