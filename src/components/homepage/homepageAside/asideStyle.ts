import styled from "styled-components";

export const Container = styled.section`
    width: 30%;
    max-width: 300px;
    text-align: center;

    ul {
        max-height: 330px;
        overflow-y: scroll;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 2px;
            height: 2px;
            border-radius: 100%;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: #888;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }

        @media (max-width: 800px) {
            display: flex;
        }
    }

    .city-box {
        margin-bottom: 25px;
        color: rgba(43, 41, 41, 0.5);

        p {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 15px;
        }
    }

    @media (max-width: 800px) {
        width: 100%;
        max-width: none;

        ul {
            overflow-y: hidden;
            overflow-x: scroll;
        }
    }
`;
