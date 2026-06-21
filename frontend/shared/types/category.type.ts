import { IProduct } from "."

export interface ICategory {
    id: string
    name: string

    products: IProduct[]
    _count: {
        products: number
    }
}