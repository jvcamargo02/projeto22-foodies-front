export interface ICategories {
    name: string;
    image: string;
}

export interface IRestaurant {
    name: string;
    image: string;
    type: string;
    city: string;
    isOpen: boolean;
    closeHour: string;
    openingHour: string;
}

export interface IGiftCards {
    name: string;
    image: string;
    isOpen: boolean;
    description: string;
    code: string
}