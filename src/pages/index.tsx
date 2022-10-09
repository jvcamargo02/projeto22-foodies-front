import React from "react";

import * as indexStyle from "../styles/stylePages/indexStyle";
import Header from "../components/header/Header";
import PreLoader from "../components/preLoad/PreLoad";
import foodiesLogo from "../assets/foodiesLogo.json";

import { Aside } from "../components/homepage/homepageAside/Aside";
import { RestaurantHomepageList } from "../components/homepage/homepageMain/RestaurantHomepageList";

interface Props {}

const Home = (props: Props) => {
    const [preLoadView, setPreLoadView] = React.useState(false);

    setTimeout(() => setPreLoadView(true), 10000);

    return (
        <>
            <PreLoader display={preLoadView} />
            <indexStyle.Container display={preLoadView}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{ type: "linear", duration: 3, delay: 10 }}
            >
                <Header image={foodiesLogo} />
                <main>
                    <Aside />
                    <RestaurantHomepageList />
                </main>
            </indexStyle.Container>
        </>
    );
};

export default Home;

