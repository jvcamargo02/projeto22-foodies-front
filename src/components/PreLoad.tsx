import styled from "styled-components";

import animationDataFoodieLogo from "../assets/foodiesLogo.json";
import * as preLoadStyle from "./StyleComponents/preLoadStyle"

interface IPropType {
    display: boolean
}

function PreLoader (props: IPropType) {
    const foodieLogoDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataFoodieLogo,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Container display={props.display}>
            <preLoadStyle.PreLoad
                initial={{ opacity: 0, x: 0, y: -200 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    animation: "ease-in-out",
                }}
                exit={{ opacity: 0, x: 0, y: -100 }} 
                transition={{ type: "linear", duration: 3 }}
            >
                <preLoadStyle.Title>Welcome to</preLoadStyle.Title>
                <preLoadStyle.Logo options={foodieLogoDefaultOptions} height={150} width={300} style={{ pointerEvents: "none"
    }}/>
            </preLoadStyle.PreLoad>
        </Container>
    );
};

export default PreLoader;

export const Container = styled.section<{display?: boolean}>`
    display: ${({ display }) => display ? "none" : "inherit"};
`