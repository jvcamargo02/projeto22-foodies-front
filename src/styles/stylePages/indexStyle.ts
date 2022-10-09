import styled from "styled-components";
import { motion } from "framer-motion";
import { ModalBody } from "@chakra-ui/react";

export const Container = styled(motion.section)<{ display?: boolean }>`
    display: ${({ display }) => (display ? "inherit" : "none")};

    main {
        display: flex;
        gap: 40px;
        width: 100%;
        margin-top: 60px;
    }


    @media(max-width: 800px) {
        main{
            display: initial
        }
    }
`;
