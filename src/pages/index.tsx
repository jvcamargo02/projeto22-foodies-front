import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { Divider, Chip } from "@mui/material";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import useSWR, { useSWRConfig } from "swr";
import { useRouter } from "next/router";

import { IRestaurant, ICategories } from "../types/dataTypes";
import { fetcher } from "../utils/fetcher";
import * as indexStyle from "../styles/stylePages/indexStyle";
import Header from "../components/header/Header";
import PreLoader from "../components/preLoad/PreLoad";
import foodiesLogo from "../assets/foodiesLogo.json";
import CategoriesList from "../components/categories/CategoriesList";
import LoginModal from "../components/modals/LoginModal";
import RestaurantList from "../components/restaurants/RestaurantsList";
import { NextResponse } from "next/server";
import { Aside } from "../components/homepage/homepageAside/Aside";
import { RestaurantHomepageList } from "../components/homepage/homepageMain/RestaurantHomepageList";

interface Props {
    restaurants: IRestaurant[];
    categories: ICategories[];
}

const Home = ({ response }: { response: Props[] }) => {
    const restaurants: IRestaurant[] | [] = [];
    const [preLoadView, setPreLoadView] = React.useState(false);
    const [password, setPassword] = React.useState("");
    
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

