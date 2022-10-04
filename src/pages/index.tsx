import {
    GetStaticProps,
    GetStaticPropsContext,
} from "next";
import { useState } from "react"
import styled from "styled-components"
import useSWR from "swr";


import Header from "../components/Header";
import PreLoader from "../components/PreLoad"
import foodiesLogo from "../assets/foodiesLogo.json"

interface IRestaurant {
    name: string,
    image: string,
    type: string,
    city: string
}

const Home = ({response}:{response: IRestaurant[]}) => {
    const [preLoadView, setPreLoadView] = useState(false)

    setTimeout(() => setPreLoadView(true), 10000)


    return (
        <> 
            <PreLoader display={preLoadView} /> 
            <Header image={foodiesLogo} />
            {/* {
                response.map((restaurant) => {
                    return(
                    <> 
                    <p>{restaurant.name}</p>
                        <p>{restaurant.image}</p>
                    <p>{restaurant.type}</p> 
                    </>)
                }) */}
            
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async (
    ctx: GetStaticPropsContext
  ) => {
    //conectar num banco de dados
    //conectar numa api externa

    let response = [
        {
            name: "Terraço Mineiro",
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5bdee7126645185.62a74d80b2a53.jpg",
            type: "Brazilian Food",
            city: "São Paulo"
        }

    ]


    return {
      props: {response},
      revalidate: 10
    };
  };
