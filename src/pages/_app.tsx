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
import { RestauranteContext } from "../contexts/restaurantContext";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const [token, setToken] = React.useState("");
    const [email, setEmail] = React.useState<string>("");
    const [name, setName] = React.useState("");
    const [userId, setUserId] = React.useState<number>();
    const [cep, setCep] = React.useState<string | undefined>("");
    const [city, setCity] = React.useState<string>("");
    const [state, setState] = React.useState<string>("");
    const [number, setNumber] = React.useState<string>("");
    const [address, setAddress] = React.useState<string>("");
    const [backgroundColor, setBackgroundColor] = React.useState<string>("#f0f0f0");
    const [restaurantId, setRestaurantId] = React.useState<number | undefined>(undefined);
    const [restaurantName, setRestaurantName] = React.useState("");
    const [restaurantImage, setRestaurantImage] = React.useState("");
    const [restaurantType, setRestaurantType] = React.useState("");
    const [restaurantCity, setRestaurantCity] = React.useState("");
    const [restaurantState, setRestaurantState] = React.useState("")
    const [closeHour, setCloseHour] = React.useState("");
    const [openingHour, setOpeningHour] = React.useState("");
    const [restaurantEmail, setRestaurantEmail] = React.useState("");
    const [restaurantPassword, setRestaurantPassword] = React.useState('')

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

    const restaurantContext = {
        restaurantId,
        setRestaurantId,
        restaurantName,
        setRestaurantName,
        restaurantImage,
        setRestaurantImage,
        restaurantType,
        setRestaurantType,
        restaurantCity,
        setRestaurantCity,
        closeHour,
        setCloseHour,
        openingHour,
        setOpeningHour,
        restaurantEmail,
        setRestaurantEmail,
        restaurantPassword,
        setRestaurantPassword,
        restaurantState,
        setRestaurantState
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
                    <RestauranteContext.Provider value={restaurantContext}>
                        <CssBaseline />
                        <GlobalStyle backgroundColor={backgroundColor} />
                        <Container>
                            <Component {...pageProps} />
                        </Container>
                    </RestauranteContext.Provider>
                </UserContext.Provider>
            </ThemeProvider>
        </CacheProvider>
    );
}
