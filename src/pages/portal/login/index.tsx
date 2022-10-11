import Lottie from "react-lottie";
import styled from "styled-components";

import { LoginModal } from "../../../components/modals/loginModal";
import animationDataFoodieLogo from "../../../assets/foodiesLogo.json";
import Link from "next/link";

export default function LoginPortal() {
    const foodieLogoDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataFoodieLogo,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Container>
            <Lottie options={foodieLogoDefaultOptions} height={150} width={300} style={{ pointerEvents: "none" }} />
            <LoginModal loginModalVisible={false} setLoginModalVisible={() => false} />
            <Link href="/portal/signup"><a>Don't have an account? Sign Up</a></Link>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;
