import { useState } from "react";
import Lottie from "react-lottie";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Modal from "react-bootstrap/Modal";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Image from "next/image";

import { GiftCardsModal } from "../modals/giftCardsModal";

import { Container } from "./headerStyle";
import { SignUpModal } from "../modals/signUpModal";
import { LoginModal } from "../modals/loginModal/index";
import { useRouter } from "next/router";

interface Props {
    image: any;
    homepage: boolean;
    backgroundColor?: string;
}

function Header(props: Props) {
    const [searchBoxValue, setSearchBoxValue] = useState("");
    const [giftCardModalVisible, setGiftCardModalVisible] = useState(false);
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [signUpModalVisible, setSignUpModalVisible] = useState(false);
    const signUpSteps = [" Your Info", "Your Main Address"];
    const [actualSignUpStep, setActualSignUpStep] = useState(0);
    const router = useRouter()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBoxValue(e.target.value);
    };

    const foodieLogoDefaultOptions = {
        loop: true,
        autoplay: true,
        controls: true,
        animationData: props.image,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const style: any = {
        margin: 0,
        height: 60,
        width: 120,
        pointerEvents: "none",
    };

    return (
        <>
            <Container backgroundColor={props.backgroundColor}>
                {props.homepage ? (
                    <Lottie options={foodieLogoDefaultOptions} height={60} width={120} style={style} />
                ) : (
                    <img src={props.image} />
                )}
                <nav>
                    <ul>
                        {" "}
                        <li>
                            <button onClick={() => router.push("/portal/login")}>Portal</button>
                        </li>
                        <li>
                            <button onClick={() => setGiftCardModalVisible(true)}>Discount</button>
                        </li>
                        <li>
                        <button onClick={() => setSignUpModalVisible(true)} >Sign Up</button>
                        </li>
                        <li>
                            <button onClick={() => setLoginModalVisible(true)}>Login</button>
                        </li>
                    </ul>
                    <Paper
                        component="form"
                        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 200, borderRadius: 50 }}
                    >
                        <IconButton type="button" sx={{ p: "6px" }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase size="small" placeholder="Search" inputProps={{ "aria-label": "search" }} />
                    </Paper>
                    <Badge badgeContent={4} color="primary">
                        <LocalMallIcon />
                    </Badge>
                </nav>
            </Container>
            <Modal show={giftCardModalVisible} onHide={() => setGiftCardModalVisible(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Available Gift Cards</Modal.Title>
                </Modal.Header>
                <GiftCardsModal
                    giftCardModalVisible={giftCardModalVisible}
                    setGiftCardModalVisible={setGiftCardModalVisible}
                />
            </Modal>
            <Modal show={signUpModalVisible} onHide={() => setSignUpModalVisible(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <br />
                <Stepper activeStep={actualSignUpStep} alternativeLabel>
                    {signUpSteps.map((label) => (
                        <Step key={label} color="info">
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <SignUpModal
                    signUpModalVisible={signUpModalVisible}
                    setSignUpModalVisible={setSignUpModalVisible}
                    actualSignUpStep={actualSignUpStep}
                    setActualSignUpStep={setActualSignUpStep}
                    setLoginModalVisible={setLoginModalVisible}
                />
            </Modal>
            <Modal show={loginModalVisible} onHide={() => setLoginModalVisible(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <LoginModal loginModalVisible={loginModalVisible} setLoginModalVisible={setLoginModalVisible} />
            </Modal>
        </>
    );
}

export default Header;
