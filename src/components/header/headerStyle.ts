import styled from "styled-components";

export const Container = styled.header<{ backgroundColor?: string }>`
    height: 80px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    max-width: 1200px;
    margin: 0 auto;
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "#f0f0f0"};
    z-index: 2;

    button {
        text-decoration: none;
        color: #2b2929;
        font-weight: 500;
        border: none;
        box-shadow: none;
        background-color: transparent;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 25px;
    }

    ul {
        display: flex;
        gap: 18px;
    }

    img {
        margin-top: 5px;
        height: 60px;
    }
`;
