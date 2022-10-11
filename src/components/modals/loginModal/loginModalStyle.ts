import styled from "styled-components"
import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button';

export const Container = styled(Modal.Body)`
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    align-items: center;
`

export const NextButton = styled(Button)`
    float: right;
    margin-top: 10px;

`