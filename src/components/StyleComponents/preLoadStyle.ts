import styled from "styled-components"
import { motion } from "framer-motion"
import Lottie from "react-lottie";

export const PreLoad = styled(motion.section)`
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #f0f0f0;
font-family: "Pacifico", cursive;
-webkit-transition: opacity 1.2s 0s ease-out;
-moz-transition: opacity 1.2s 0s ease-out;
-o-transition: opacity 1.2s 0s ease-out;
transition: opacity 1.2s 0s ease-out;
z-index: 2;
`;

export const Title = styled.h1`
color: #2b2929;
font-size: 90px;
`;

export const Logo = styled(Lottie)`

`;

