import React, { Dispatch, SetStateAction } from "react"
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

import { Container, NextButton } from "./loginModalStyle"
import { UserContext } from "../../../contexts/userContext";
import { postFetcher } from "../../../utils/fetcher";

interface Props {
    loginModalVisible: boolean;
    setLoginModalVisible: Dispatch<SetStateAction<boolean>>;
}

export function LoginModal(props: Props) {
    const context = React.useContext(UserContext)
    const [password, setPassword] = React.useState("");
    const [buttonContent, setButtonContent] = React.useState<any>("Login")

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setButtonContent(<CircularProgress size={15}/>)
        
        try {
            await postFetcher("signInUser", { email: context?.email, password }).then((res) => {
                console.log(res)
                props.setLoginModalVisible(false);
            });
        } catch (e) {
            setButtonContent("Try Again");
            console.log(e);
        }
    }

    return (
        <Container>
            <form onSubmit={(e) => onSubmit(e)}>
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
                    {buttonContent}
                </NextButton>
            </form>
        </Container>
    )
}