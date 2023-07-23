import styled from 'styled-components';
import img from '../../images/home-bg.jpg';

export const HomeContainer = styled.div`
    background-image:linear-gradient(rgba(46, 47, 66, 0.9), rgba(46, 47, 66, 0.5)), url(${img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
`;

export const Header = styled.h1`
    font-family: 'Oooh Baby', cursive;
    font-size: 70px;
    margin-bottom: 40px;
    color: white;

`;

export const Description = styled.p`
    font-family: 'Shadows Into Light', cursive;
    font-size: 40px;
    color: white;
`;
