import { GetStaticProps, GetStaticPropsContext } from "next";
import { useState } from "react";
import { Divider, Chip } from "@mui/material";
import useSWR from "swr";

import * as indexStyle from "./stylePages/indexStyle";
import Header from "../components/Header";
import PreLoader from "../components/PreLoad";
import foodiesLogo from "../assets/foodiesLogo.json";
import CategoriesList from "../components/CategoriesList";

interface IRestaurant {
    name: string;
    image: string;
    type: string;
    city: string;
}

interface ICategories {
    name: string;
    image: string;
}

interface Props {
    restaurants: IRestaurant[];
    categories: ICategories[];
}

const Home = ({ response }: { response: Props[] }) => {
    const categories = response[0].categories;

    const [preLoadView, setPreLoadView] = useState(false);

    setTimeout(() => setPreLoadView(true), 10000);

    return (
        <>
            <PreLoader display={preLoadView} />
            <indexStyle.Container
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{ type: "linear", duration: 3, delay: 10 }}
            >
                <Header image={foodiesLogo} />
                <main>
                    <indexStyle.Categories>
                        <Divider variant="middle">
                            <Chip label="CATEGORIES" />
                        </Divider>
                        <ul>
                            {categories.map((category) => {
                                return <CategoriesList category={category} />;
                            })}
                        </ul>
                    </indexStyle.Categories>
                </main>

                {/* {
                response.map((restaurant) => {
                    return(
                    <> 
                    <p>{restaurant.name}</p>
                        <p>{restaurant.image}</p>
                    <p>{restaurant.type}</p> 
                    </>)
                }) */}
            </indexStyle.Container>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
    
    let response = [
        {
            restaurants: [
                {
                    name: "Terraço Mineiro",
                    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5bdee7126645185.62a74d80b2a53.jpg",
                    type: "Brazilian Food",
                    city: "São Paulo",
                },
            ],

            categories: [
                {
                    name: "Coffee Shop",
                    image: "https://aux.iconspalace.com/uploads/coffee-icon-256.png",
                },
                {
                    name: "Brazilian Food",
                    image: "http://cdn.onlinewebfonts.com/svg/img_415179.png",
                },
                {
                    name: "Fast-Food",
                    image: "https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/food-icon.png",
                },
            ],
        },
    ];
    return {
        props: { response },
        revalidate: 10,
    };
};
