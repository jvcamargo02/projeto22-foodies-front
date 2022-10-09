import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    justify-content: center;

    h6 {
        font-size: 50px;
        color: rgba(43, 41, 41, 0.5);
        text-align: center;
    }

    @media (max-width: 800px) {
        margin-top: 35px;
    }
`;
