import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";

import animationDataFoodieLogo from "../../../assets/foodiesLogo.json";
import { RestauranteContext } from "../../../contexts/restaurantContext";
import { fetcher } from "../../../utils/fetcher";
import Button from 'react-bootstrap/Button';

export default function SignUpPortal() {
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
            <h1>Exclusive portal for registering restaurants</h1>
            <ActualStep />
        </Container>
    );
}

function ActualStep() {
    const [actualSignUpStep, setActualSignUpStep] = React.useState(0);

    switch (actualSignUpStep) {
        case 0:
            return <EmailPortal setActualSignUpStep={setActualSignUpStep} />;

        case 1:
            return <></>;

        default:
            return <>ERROR: RELOAD PAGE</>;
    }
}

function EmailPortal({ setActualSignUpStep }: { setActualSignUpStep: Dispatch<SetStateAction<number>> }) {
    const context = React.useContext(RestauranteContext);

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setActualSignUpStep(1);
    }

    return (
        <form>
            <TextField
                id="name"
                label="Name"
                value={context?.restaurantName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => context?.setRestaurantName(e.target.value)}
                margin="normal"
                variant="standard"
                color="info"
                required
                fullWidth
            />
            <TextField
                id="email"
                label="Email"
                type="email"
                value={context?.restaurantEmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => context?.setRestaurantEmail(e.target.value)}
                margin="normal"
                variant="standard"
                color="info"
                required
                fullWidth
            />
            <TextField
                id="password"
                label="Password"
                type="password"
                value={context?.setRestaurantPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => context?.setRestaurantPassword(e.target.value)}
                margin="normal"
                variant="standard"
                color="info"
                required
                fullWidth
            />
            <NextButton type="submit" variant="dark">
                Next
            </NextButton>
        </form>
    );
}

function RestaurantLocationDetails({ setActualSignUpStep }: { setActualSignUpStep: Dispatch<SetStateAction<number>> }) {
    const context = React.useContext(RestauranteContext);
    const router = useRouter();
    const { cache } = useSWRConfig();
    const [cep, setCep] = React.useState("");
    const [nextButtonContent, setNextButtonContent] = React.useState<any>("Next");
    const [disabledForm, setDisabledForm] = React.useState(true);
    const [cepButtonContent, setCepButtonContent] = React.useState<any>(<SearchIcon />);

    const { data, mutate, error } = useSWR(router.isReady ? `findcep?cep=${cep?.replace("-", "")}` : null, fetcher, {
        onSuccess: (data, key, config) => {
            context?.setRestaurantState(data.data.uf);
            context?.setRestaurantCity(data.data.localidade);
            setCepButtonContent(<SearchIcon />);
            setDisabledForm(false);
        },
    });
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setActualSignUpStep(2);
    }

    function findCep(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setCepButtonContent(<CircularProgress size={10} />);
    }

    return (
        <>
            <form onSubmit={(e) => findCep(e)}>
                <label id="cepLabel">Zip-code*</label>
                <input
                    id="cep"
                    placeholder="12345-678"
                    value={cep}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCep(e.target.value)}
                    pattern="\d{5}-?\d{3}"
                    required
                />
                <CepButton type="submit" variant="dark" size="small">
                    {cepButtonContent}
                </CepButton>
            </form>
            <form onSubmit={(e) => onSubmit(e)}>
                <TextField
                    id="city"
                    label="City"
                    type="text"
                    value={context?.restaurantCity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => context?.setRestaurantCity(e.target.value)}
                    margin="normal"
                    variant="standard"
                    color="info"
                    required
                    disabled
                />
                <TextField
                    id="state"
                    label="State"
                    type="text"
                    value={context?.restaurantState}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => context?.setRestaurantState(e.target.value)}
                    margin="normal"
                    variant="standard"
                    color="info"
                    disabled
                    required
                    fullWidth
                />
            </form>
        </>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

    h1 {
        font-size: 40px;
        font-weight: 600px;
        margin-bottom: 50px;
        text-align: center;
    }
`;

export const CepButton = styled(Button)`
    margin-left: 10px;
`;

export const NextButton = styled(Button)`
    float: right;
    margin-top: 10px;

`