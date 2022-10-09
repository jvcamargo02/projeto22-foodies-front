import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";

import Theme from "../theme";
import createEmotionCache from "../createEmotionCache";
import { GlobalStyle } from "../styles/resetCss";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Foodies</title>
            </Head>

            <ThemeProvider theme={Theme}>
                <CssBaseline />
                <GlobalStyle />
                <Container>
                    <Component {...pageProps} />
                </Container>
            </ThemeProvider>
        </CacheProvider>
    );
}
