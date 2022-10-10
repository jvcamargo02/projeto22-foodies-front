import React, { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import { Divider, Chip } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

import { Container } from "./asideStyle";
import { fetcher } from "../../../utils/fetcher";
import CategoriesList from "../../categories";
import { ICategories } from "../../../types/dataTypes";

interface Props {}

export const Aside = (props: Props) => {
    const [categories, setCategories] = useState<ICategories[]>([]);
    const { cache } = useSWRConfig();
    const router = useRouter();

    const { data, mutate, error } = useSWR(router.isReady ? `categories` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        onSuccess: (data, key, config) => {
            setCategories(data?.data);
        },
    });

    return (
        <Container>
            <section className="city-box">
                <Divider variant="middle">
                    <Chip label="CITY" />
                </Divider>
                <p>
                    <span>
                        <PlaceIcon />
                    </span>{" "}
                    You are located in:{" "}
                </p>
            </section>
            <Divider variant="middle">
                <Chip label="CATEGORIES" />
            </Divider>
            <ul>
                {categories.map((category, index) => {
                    return (
                        <React.Fragment key={index}>
                            <CategoriesList category={category} />
                        </React.Fragment>
                    );
                })}
            </ul>
        </Container>
    );
};
