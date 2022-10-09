import styled from "styled-components"

export const Container = styled.section`
    width: 30%;
    max-width: 300px;
    text-align: center;

    ul {
        max-height: 330px;
        overflow-y: scroll;

        @media(max-width: 800px){
            display: flex;
        }
    }

    ul::-webkit-scrollbar {
        display: none;
    }

    .city-box {
        margin-bottom: 25px;
        color: rgba(43, 41, 41, 0.5);

        p{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 15px;
        }
    }

    @media(max-width: 800px) {
        width: 100%;
        max-width: none;
    }
`;