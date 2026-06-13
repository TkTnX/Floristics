import { IProduct } from "."

export interface IPackaging {
    id: string
    name: string
    price: number
    image: string

    products: IProduct[]
}