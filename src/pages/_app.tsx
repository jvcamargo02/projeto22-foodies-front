import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";

import Theme from "../theme";
import createEmotionCache from "../createEmotionCache";
import { GlobalStyle } from "../styles/resetCss";
import { UserContext } from "../contexts/userContext";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const [token, setToken] = React.useState("");
    const [email, setEmail] = React.useState<string>("");
    const [name, setName] = React.useState("ooi");
    const [userId, setUserId] = React.useState<number>();
    const [cep, setCep] = React.useState<string>("");
    const [city, setCity] = React.useState<string>("");
    const [state, setState] = React.useState<string>("");
    const [number, setNumber] = React.useState<string>("");
    const [address, setAddress] = React.useState<string>("");
    const [backgroundColor, setBackgroundColor] = React.useState<string>("#f0f0f0");

    /*     if (typeof window !== "undefined") {

        setToken(window.localStorage?.getItem("authToken"))
        
        } */

    const userContext = {
        token,
        setToken,
        email,
        setEmail,
        name,
        setName,
        userId,
        setUserId,
        cep,
        setCep,
        city,
        setCity,
        state,
        setState,
        number,
        setNumber,
        address,
        setAddress,
        backgroundColor,
        setBackgroundColor,
    };

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Foodies</title>
            </Head>

            <ThemeProvider theme={Theme}>
                <UserContext.Provider value={userContext}>
                    <CssBaseline />
                    <GlobalStyle backgroundColor={backgroundColor}/>
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                </UserContext.Provider>
            </ThemeProvider>
        </CacheProvider>
    );
}
