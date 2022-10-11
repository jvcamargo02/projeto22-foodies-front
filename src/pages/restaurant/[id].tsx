import React, { useContext, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactFullpage from "@fullpage/react-fullpage";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { fetcher } from "../../utils/fetcher";
import { Container, ContainerCentered, HighlightedItem } from "../../styles/stylePages/restaurantPageStyle";
import { IMenuItem, IRestaurantId } from "../../types/dataTypes";
import Lottie from "react-lottie";
import animationDataFoodieLogo from "../../assets/foodiesLogo.json";
import Header from "../../components/header";
import { UserContext } from "../../contexts/userContext";

export default function RestaurantPage() {
    const context = useContext(UserContext);
    const [restaurant, setRestaurant] = useState<IRestaurantId | undefined>(undefined);
    const router = useRouter();
    const { cache } = useSWRConfig();
    const { id } = router.query;
    const foodieLogoDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataFoodieLogo,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    console.log(restaurant)

    const { data, mutate, error } = useSWR(router.isReady ? `restaurant/${id}` : null, fetcher, {
        onSuccess: (data, key, config) => {
            setRestaurant(data?.data.dataRestaurant);
        },
    });

    if (restaurant === undefined && !error) {
        return (
            <ContainerCentered>
                <Lottie options={foodieLogoDefaultOptions} height={150} width={300} style={{ pointerEvents: "none" }} />
            </ContainerCentered>
        );
    }

    if (error) {
        return (
            <ContainerCentered>
                <h6>Restaurant not found or service currently unavailable</h6>
            </ContainerCentered>
        );
    }

    const menuList = restaurant?.Menu[0].MenuItem
    context?.setBackgroundColor(restaurant?.Menu[0].backgroundColor || "#f0f0f0");

    console.log(menuList)

    return (
        <Container
            //fullpage options
            licenseKey={"gplv3-license"}
            scrollingSpeed={1000} /* Options here */
            controlArrowColor={"white"}
            render={({ state, fullpageApi }) => {
                return (
                    <>
                        <Header
                            image={restaurant?.image}
                            homepage={false}
                            backgroundColor={restaurant?.Menu[0].backgroundColor}
                        />
                        <ReactFullpage.Wrapper>
                            {menuList?.map((item: IMenuItem, index: number) => (
                                
                                <React.Fragment key={index}>
                                    <div className={"section " + index}>
                                        <HighlightedItem>
                                            <section className="item-description">
                                                <h6>{item.name}</h6>
                                                <hr />
                                                <p className="desc">{item.description}</p>
                                                <section className="price">
                                                    <p>R$ {item.price}</p>
                                                    <button>Add to Cart</button>
                                                </section>
                                            </section>
                                            <img src={item.image} alt={item.name} />
                                        </HighlightedItem>
                                        {index > 0 ? (
                                            <section
                                                className="scroll-down-button"
                                                onClick={() => fullpageApi.moveSectionUp()}
                                            >
                                                {" "}
                                                <ArrowDropUpIcon /> Click me to scroll Up
                                            </section>
                                        ) : null}
                                        {index < menuList.length - 1 ? (
                                            <section
                                                className="scroll-down-button"
                                                onClick={() => fullpageApi.moveSectionDown()}
                                            >
                                                {" "}
                                                <ArrowDropDownIcon /> Click me to see more
                                            </section>
                                        ) : null}
                                    </div>
                                </React.Fragment>
                            ))}
                        </ReactFullpage.Wrapper>
                    </>
                );
            }}
        />
    );
}
