import { useState } from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { motion } from "framer-motion";

import animationDataFoodieLogo from "../assets/foodiesLogo.json";
/* import * as preLoadStyle from "./StyleComponents/preLoadStyle" */

interface Props {
    image: any;
}

function Header(props: Props) {
    const foodieLogoDefaultOptions = {
        loop: true,
        autoplay: true,
        controls: true,
        animationData: props.image,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
        
    };
    const [searchBoxValue, setSearchBoxValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBoxValue(e.target.value);
    };

    const style: any = {
        margin: 0,
        height: 60,
        width: 120,
        pointerEvents: "none"
    };

    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "linear", duration: 3, delay: 10 }}
        >
            <Lottie options={foodieLogoDefaultOptions} height={60} width={120} style={style} />
            <nav>
                <ul>
                    <li>
                        <a href="#">Gift Cards</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Sign Up</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
                <Paper
                    component="form"
                    sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 200, borderRadius: 50 }}
                >
                    <IconButton type="button" sx={{ p: "6px" }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase size="small" placeholder="Search" inputProps={{ "aria-label": "search" }} />
                </Paper>
                <a href="#">
                    <Badge badgeContent={4} color="primary">
                        <LocalMallIcon />
                    </Badge>
                </a>
            </nav>
        </Container>
    );
}

export default Header;

export const Container = styled(motion.header)`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
        text-decoration: none;
        color: #2b2929;
        font-weight: 500;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 25px;
    }

    ul {
        display: flex;
        gap: 18px;
    }
`;
