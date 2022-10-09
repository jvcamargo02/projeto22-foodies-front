import styled from "styled-components"

export const Container = styled.header`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: #2b2929;
        font-weight: 500;
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
`;
