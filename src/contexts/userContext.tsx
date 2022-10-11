import { Dispatch, SetStateAction,createContext } from "react";

interface IUserData {
    token: string;
    setToken: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    userId: number | undefined;
    setUserId: Dispatch<SetStateAction<number | undefined>>;
    cep: string | undefined;
    setCep: Dispatch<SetStateAction<string | undefined>>;
    city: string;
    setCity: Dispatch<SetStateAction<string>>;
    state: string;
    setState: Dispatch<SetStateAction<string>>;
    address: string;
    setAddress: Dispatch<SetStateAction<string>>;
    number: string;
    setNumber: Dispatch<SetStateAction<string>>;
    backgroundColor: string;
    setBackgroundColor: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext<IUserData | undefined>(undefined);
