import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";


export const ContainerCentered = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 65px;
    text-align: center;
`;

export const Container = styled(ReactFullpage)`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .highlighted-item {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;

        .item-description {
            max-width: 30%;

            h6 {
                font-size: 60px;
                font-weight: 600;
            }

            p {
                font-size: 22px;
                max-height: 150px;
                overflow-y: scroll;
                color: rgba(43, 41, 41, 0.5);

                &::-webkit-scrollbar {
                    width: 2px;
                }
            }
        }

        img {
            height: 355px;
            width: 355px;
            border-radius: 100%;
            object-fit: cover;
        }
    }
`;


export const HighlightedItem = styled.section`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 30px;

    .item-description {
        max-width: 30%;

        h6 {
            font-size: 60px;
            font-weight: 600;
            color: #002855;
        }

        .desc {
            font-size: 22px;
            max-height: 150px;
            overflow-y: scroll;
            color: rgba(43, 41, 41, 0.5);

            &::-webkit-scrollbar {
                width: 2px;
            }
        }

        .price {
            margin-top: 20px;
            display: flex;
            font-weight: 600;
            color: #002855;
            font-size: 24px;
            justify-content: space-between;
            align-items: center;

            button {
                background-color: #002855;
                border: none;
                border-radius: 50px;
                padding: 10px;
                color: white;
                font-weight: 700;
            }
        }
    }

    img {
        height: 355px;
        width: 355px;
        border-radius: 100%;
        object-fit: cover;
    }
`;
