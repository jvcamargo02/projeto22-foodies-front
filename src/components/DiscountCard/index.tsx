import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "react-bootstrap";
import Image from "next/image";

import { IGiftCards } from "../../types/dataTypes";
import { Container, DiscountIconFloat } from "./giftCardStyle";
DiscountIconFloat;

interface Props {
    giftCard: IGiftCards;
}

export function GiftCard(props: Props) {
    const [copyButtonContent, setCopyButtonContent] = useState("Copy coupon");
    const [copyButtonColor, setCopyButtonColor] = useState("light");

    function copyCoupon(code: string) {
        navigator.clipboard.writeText(code);
        setCopyButtonColor("success");
        setCopyButtonContent("Copied");
    }

    return (
        <Container>
            <DiscountIconFloat />
            <img src={props.giftCard.image} alt={props.giftCard.name} title={props.giftCard.name} />
            <h6>{props.giftCard.name}</h6>
            <p>{props.giftCard.description}</p>
            <Button variant={copyButtonColor} onClick={() => copyCoupon(props.giftCard.code)}>
                {copyButtonContent}
            </Button>
        </Container>
    );
}
