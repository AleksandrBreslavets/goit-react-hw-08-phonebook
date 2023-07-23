import PropTypes from "prop-types";
import { Item, ContactDetails, Button } from "./ContactItem.styled";
import { useDispatch} from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { useState } from "react";

export const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();
    const [deletedId, setDeletedId] = useState(null);

    const handleDelete = idx => {
        setDeletedId(idx);
        dispatch(deleteContact(idx));
    };

    return (
        <Item>
            <ContactDetails>{name}: {number}</ContactDetails>
            <Button disabled={deletedId===id} onClick={() => handleDelete(id)} type="button">{deletedId === id ? "Deleting..." : "Delete"}</Button>
        </Item>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};