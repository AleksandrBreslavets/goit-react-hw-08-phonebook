import { Description, Header, HomeContainer } from "./Home.styled";

const Home = () => {
    return (
        <HomeContainer>
            <Header>PHONEBOOK</Header>
            <Description>A useful application to hold all your contacts in one place!</Description>
        </HomeContainer>
    );
};

export default Home;