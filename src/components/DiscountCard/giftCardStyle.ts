import styled from "styled-components";
import DiscountIcon from "@mui/icons-material/Discount";

export const Container = styled.section`
    box-sizing: border-box;
    min-width: 150px;
    padding: 10px;
    background-color: rgba(43, 41, 41, 0.1);
    border-radius: 4px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    img {
        height: 80px;
        border-radius: 100%;
    }

    h6 {
        font-size: 18px;
        font-weight: 600;
    }
`;

export const DiscountIconFloat = styled(DiscountIcon)`
    position: absolute;
    top: 10px;
    left: 10px;
`;
