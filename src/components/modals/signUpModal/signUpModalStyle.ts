import styled from "styled-components"
import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button';
import { TextField } from "@mui/material";

export const Container = styled(Modal.Body)`
    box-sizing: border-box;
    padding: 30px;

    #cepLabel {
        font-size: 12px;
        display: block;
    }

    #cep{
        border: none;
        margin: 8px 0;
        border-bottom: 1px solid gray;
    }

`

export const NextButton = styled(Button)`
    float: right;
    margin-top: 10px;

`

export const BackButton = styled(Button)`
    float: left;
    margin-top: 10px;

`

export const CepButton = styled(Button)`
    margin-left: 10px;

`

export const Input = styled(TextField)`
    margin-right: 10px;
    max-width: 20%;
`