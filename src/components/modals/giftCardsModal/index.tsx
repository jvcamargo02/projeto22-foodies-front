import { useRouter } from "next/router";
import React, { useState, SetStateAction, Dispatch } from "react";
import useSWR from "swr";
import CircularProgress from "@mui/material/CircularProgress";

import { fetcher } from "../../../utils/fetcher";
import { Container } from "./giftCardModalStyle";
import { IGiftCards } from "../../../types/dataTypes";
import { GiftCard } from "../../DiscountCard";

fetcher;

interface Props {
    giftCardModalVisible: boolean;
    setGiftCardModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const GiftCardsModal = (props: Props) => {
    const [giftCards, setGiftCards] = useState([]);

    const router = useRouter();

    const { data, mutate, error } = useSWR(router.isReady ? `giftcards` : null, fetcher, {
        refreshInterval: 10000,
        onSuccess: (data, key, config) => {
            setGiftCards(data?.data);
        },
    });

    if (giftCards.length === 0 && data === undefined) {
        return (
            <Container>
                <CircularProgress />
            </Container>
        );
    }

    if (giftCards.length === 0 && data !== undefined) {
        return (
            <Container>
                <h6>There are no discounts registered in your location yet.</h6>
            </Container>
        );
    }

    return (
        <Container>
            {data?.data.map((giftCard: IGiftCards, index: number) => {


                return (
                    <>
                        <React.Fragment key={index}>
                            <GiftCard giftCard={giftCard}/>
                        </React.Fragment>
                    </>
                );
            })}{" "}
        </Container>
    );
};
