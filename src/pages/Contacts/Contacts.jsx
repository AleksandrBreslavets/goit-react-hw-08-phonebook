import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Loader } from "components/Loader/Loader";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Container, ErrorMsg, MainTitle, SectionTitle} from "./Contacts.styled";

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container>
            <MainTitle>Phonebook</MainTitle>
            <ContactForm />
            <SectionTitle>Contacts</SectionTitle>
            <Filter />
            <ContactList />
            {isLoading && !error && <Loader />}
            {error && <ErrorMsg>Something went wrong... Try to reload the page!</ErrorMsg>}
        </Container>
    );
};

export default Contacts;