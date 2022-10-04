import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
    main {
        margin-top: 60px;
    }
`;

export const Categories = styled.section`
    max-width: 300px; 
    display: flex;
    text-align: center;
    flex-direction: column;

    ul{
        max-height: 500px;
        overflow-y: scroll;
    }

    ul::-webkit-scrollbar {
    display: none;
}
`;
