import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrap = styled(Form)`
    margin-bottom: 40px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const Input = styled(Field)`
    font-family: 'Pangolin', cursive;
    padding-left:15px;
    font-size:20px;
    width: 300px;
    height: 30px;
    border-radius: 25px;
    border:none;
`;

export const Button = styled.button`
    padding: 10px 32px;
    border-radius: 10px;
    border: none;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 0.04em;
    background-color: #5b2a96;
    color: white;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,:focus,:active{
        background-color: #3b1d5e;
    }
`;