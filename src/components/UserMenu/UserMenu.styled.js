import styled from 'styled-components';

export const UserContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
`;

export const Greeting = styled.p`
    font-family: 'Dancing Script', cursive;
    font-size: 20px;
    margin-right: 30px;
`;

export const LogOutBtn = styled.button`
    padding: 10px 40px;
    font-family: 'Courier New', Courier, monospace;
    font-size:15px;
    font-weight: 600;
    background-color: transparent;
    border-radius: 25px;
    border: 1px solid #5b2a96;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,:focus,:active{
        background-color: #3b1d5e;
        color: white;
    }
`;