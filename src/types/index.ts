export interface IProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number
}

export interface IUserData {
    payMethod: string;
    adress: string;
    email: string;
    phone: string;
}

export type TProductCatalog = Pick<IProduct, 
'id' | 'image' | 'title' | 'category' | 'price'>

export type TProductBasket = Pick<IProduct, 'id' | 'title' | 'price'>

export type TUserAdress = Pick<IUserData, 'payMethod' | 'adress'>

export type TUserContacts = Pick<IUserData, 'email' | 'phone'>