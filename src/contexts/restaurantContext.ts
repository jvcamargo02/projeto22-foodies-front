import { Dispatch, SetStateAction, createContext } from "react";


interface IRestaurantSignUp {
    restaurantId: number | undefined;
    setRestaurantId: Dispatch<SetStateAction<number | undefined>>;
    restaurantName: string;
    setRestaurantName: Dispatch<SetStateAction<string>>;
    restaurantImage: string;
    setRestaurantImage: Dispatch<SetStateAction<string>>;
    restaurantType: string;
    setRestaurantType:  Dispatch<SetStateAction<string>>;
    restaurantCity: string;
    setRestaurantCity: Dispatch<SetStateAction<string>>;
    closeHour: string;
    setCloseHour: Dispatch<SetStateAction<string>>;
    openingHour: string;
    setOpeningHour: Dispatch<SetStateAction<string>>;
    restaurantEmail: string;
    setRestaurantEmail: Dispatch<SetStateAction<string>>;
    restaurantPassword: string;
    setRestaurantPassword: Dispatch<SetStateAction<string>>;
    restaurantState: string;
    setRestaurantState: Dispatch<SetStateAction<string>>;
}

export const RestauranteContext = createContext<IRestaurantSignUp| undefined>(undefined);
