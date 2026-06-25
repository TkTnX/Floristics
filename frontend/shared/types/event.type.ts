import { IProduct } from ".";

export interface IEvent { 
    id: string,
    name: string,
    products: IProduct[]
}