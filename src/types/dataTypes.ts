export interface ICategories {
    name: string;
    image: string;
}

export interface IRestaurant {
    id: number;
    name: string;
    image: string;
    type: IType;
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
    code: string;
}

export interface IRestaurantId {
    id: number;
    name: string;
    image: string;
    typeId: number;
    type: IType;
    city: string;
    state: string;
    closeHour: string;
    openingHour: string;
    Menu: IMenu[];
}

export interface IType {
    name: string;
}

export interface IMenu {
    backgroundColor: string;
    MenuItem: IMenuItem[];
}

export interface IMenuItem {
    description: string;
    id: number;
    image: string;
    menuId: number;
    name: string;
    price: string;
}