import styled from 'styled-components';
import {Field, Form} from "formik";

export const StyledForm = styled(Form)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 72px 24px 72px 24px;
    width: 400px;
    
    background-color: white;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
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
    font-size:15px;
    width: 360px;
    height: 30px;
    border-radius: 25px;
    border:1px solid #3b1d5e;
`;

export const StyledErrMsg = styled.p`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: red;
    font-size:14px;
    margin-top: 5px;
    font-style: italic;
    font-weight: 400;
`;
