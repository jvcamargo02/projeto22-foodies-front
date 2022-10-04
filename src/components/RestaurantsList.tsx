import styled from "styled-components";

import animationDataFoodieLogo from "../assets/foodiesLogo.json";
/* import * as preLoadStyle from "./StyleComponents/preLoadStyle" */

interface IPropType {
    display: boolean;
}

function PreLoader(props: IPropType) {

    return <Container></Container>;
}

export default PreLoader;

export const Container = styled.section<{ display?: boolean }>`
    display: ${({ display }) => (display ? "none" : "inherit")};
`;
