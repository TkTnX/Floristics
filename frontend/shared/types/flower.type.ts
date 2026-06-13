import { IProduct } from "."

export interface IFlower {
    id: string
    name: string
    price: number
    images: string[]

    products: IProduct[]
}