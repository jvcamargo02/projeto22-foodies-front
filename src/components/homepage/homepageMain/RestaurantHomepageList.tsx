import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { Divider } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";

import { Container } from "./restaurantsHomePageListStyle";
import { IRestaurant } from "../../../types/dataTypes";
import { fetcher } from "../../../utils/fetcher";
import RestaurantList from "../../restaurants/RestaurantsList";

interface Props {}

export const RestaurantHomepageList = (props: Props) => {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
    const [countPage, setCountPages] = useState(1);
    const router = useRouter();
    const { page = 1 } = router.query;
    const { cache } = useSWRConfig();

    const { data, mutate, error } = useSWR(router.isReady ? `restaurants?_limit=10&_page=${page}` : null, fetcher, {
        refreshInterval: 10000,
        onSuccess: (data, key, config) => {
            setRestaurants(data?.data);
            setCountPages(+(data?.total / 10).toFixed());
        },
    });

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`?page=${value}`);
    };

    if (restaurants.length === 0 && data === undefined) {
        return (
            <Container>
                <CircularProgress />
            </Container>
        );
    }

    if (restaurants.length === 0 && data !== undefined) {
        return (
            <Container>
                <h6>There are no restaurants registered in your location yet.</h6>
            </Container>
        );
    }

    return (
        <Container>
            {data?.data.map((restaurant: IRestaurant, index: number) => {
                return (
                    <>
                        <React.Fragment key={index}>
                            <RestaurantList restaurant={restaurant} />
                            {index < restaurants.length - 1 ? <Divider /> : null}
                        </React.Fragment>
                    </>
                );
            })}{" "}
            <Pagination count={countPage} page={+page} onChange={handleChange} />
        </Container>
    );
};
