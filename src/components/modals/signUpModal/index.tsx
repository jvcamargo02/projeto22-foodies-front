import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";

import { Container, NextButton, BackButton, CepButton, Input } from "./signUpModalStyle";
import { UserContext } from "../../../contexts/userContext";
import { fetcher } from "../../../utils/fetcher";

interface Props {
    signUpModalVisible: boolean;
    setSignUpModalVisible: Dispatch<SetStateAction<boolean>>;
    actualSignUpStep: number;
    setActualSignUpStep: Dispatch<SetStateAction<number>>;
}

export function SignUpModal(props: Props) {
    switch (props.actualSignUpStep) {
        case 0:
            return <UserInfoSignUpModal setActualSignUpStep={props.setActualSignUpStep} />;

        case 1:
            return <UserAdressSignUpModal setActualSignUpStep={props.setActualSignUpStep} />;

        default:
            return <>ERROR: RELOAD PAGE</>;
    }
}

function UserInfoSignUpModal({ setActualSignUpStep }: { setActualSignUpStep: Dispatch<SetStateAction<number>> }) {
    const context = React.useContext(UserContext);
    const [password, setPassword] = React.useState("");

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setActualSignUpStep(1);
    }

    return (
        <Container>
            <form onSubmit={(e) => onSubmit(e)}>
                <TextField
                    id="name"
                    label="Name"
                    value={context?.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => context?.setName(e.target.value)}
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
                    value={context?.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => context?.setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
        </Container>
    );
}

function UserAdressSignUpModal({ setActualSignUpStep }: { setActualSignUpStep: Dispatch<SetStateAction<number>> }) {
    const context = React.useContext(UserContext);
    const router = useRouter();
    const { cache } = useSWRConfig();
    const [cep, setCep] = React.useState('')
    const [nextButtonContent, setNextButtonContent] = React.useState<any>("Next");
    const [disabledForm, setDisabledForm] = React.useState(true)
    const [cepButtonContent, setCepButtonContent] = React.useState<any>(<SearchIcon />);
    const { data, mutate, error } = useSWR(router.isReady ? `findcep?cep=${(context?.cep)?.replace('-', '')}` : null, fetcher, {
        onSuccess: (data, key, config) => {
            context?.setState(data.data.uf)
            context?.setAddress(data.data.logradouro)
            context?.setCity(data.data.localidade)
            setCepButtonContent(<SearchIcon />)
            setDisabledForm(false)
            console.log(disabledForm)
            },
        });

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setNextButtonContent(<CircularProgress size={15} />);
    }

    function findCep(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setCepButtonContent(<CircularProgress size={10} />);
        context?.setCep(cep)
    }

    return (
        <Container>
            {" "}
            <form onSubmit={(e) => findCep(e)}>
                <label id="cepLabel">Zip-code*</label>
                <input
                    id="cep"
                    placeholder="12345-678"
                    value={cep}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCep(e.target.value)}
                    pattern="\d{5}-\d{3}"
                    required
                />
                <CepButton type="submit" variant="dark" size="small">
                    {cepButtonContent}
                </CepButton>
            </form>
            <form onSubmit={(e) => onSubmit(e)}>
                <TextField
                    id="address"
                    label="Address"
                    type="text"
                    value={context?.address}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => context?.setAddress(e.target.value)}
                    margin="normal"
                    variant="standard"
                    color="info"
                    disabled
                    required
                    fullWidth
                />
                <Input
                    id="Number"
                    label="Number"
                    type="number"
                    value={context?.number}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => context?.setNumber(e.target.value)}
                    margin="normal"
                    variant="standard"
                    color="info"
                    required
                />
                <TextField
                    id="city"
                    label="City"
                    type="text"
                    value={context?.city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => context?.setCity(e.target.value)}
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
                    value={context?.state}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => context?.setState(e.target.value)}
                    margin="normal"
                    variant="standard"
                    color="info"
                    disabled
                    required
                    fullWidth
                />
                <BackButton variant="light" onClick={() => setActualSignUpStep(0)}>
                    Go Back
                </BackButton>

                <NextButton type="submit" variant="dark" disabled={disabledForm}>
                    {nextButtonContent}
                </NextButton>
            </form>
        </Container>
    );
}
