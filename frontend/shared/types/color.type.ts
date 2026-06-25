import { IProduct } from "."

export interface IColor {
    id: string,
    name: string
    hex: string
    products: IProduct[]
}