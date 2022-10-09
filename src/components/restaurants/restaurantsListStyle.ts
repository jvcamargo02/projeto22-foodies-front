import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled(motion.section)<{ isOpen?: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 115px;
    font-size: 25px;
    box-sizing: border-box;
    padding: 0 10px;
    cursor: ${(props) => (props.isOpen ? "pointer" : "not-allowed")};

    p {
        color: rgba(43, 41, 41, 0.5);
        font-size: 16px;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px 2px;
    }

    .name {
        margin-left: 25px;

        h4 {
            font-weight: 600;
            line-height: 30px;
            margin-bottom: 10px;
            color: rgba(43, 41, 41, 0.8);
        }
    }

    .isOpen {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-left: auto;

        h6 {
            margin-bottom: 10px;
            font-size: 22px;
            color: ${(props) => (props.isOpen ? "green" : "red")};
        }
    }

    &:hover {
        background-color: #dbdbdb;
        border-radius: 4px;
    }
`;
