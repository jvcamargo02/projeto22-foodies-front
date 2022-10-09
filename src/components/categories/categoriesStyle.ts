import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.li)`
    display: flex;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px;
    gap: 10px;
    min-width: 200px;
    max-width: 300px;

    section {
        width: fit-content;
        height: fit-content;
        filter: invert(0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        padding: 10px;
        background-color: rgba(43, 41, 41, 0.3);

        img {
            height: 20px;
            filter: invert(0.2);
        }
    }

    p {
        font-weight: 500;
        font-size: 15px;
        filter: invert(0.2);
    }

    @media(max-width: 800px) {
        flex-direction: column;
        min-width: 130px;
    }
`;
