import { ICartItem, IProduct } from "@/shared/types"

export interface ICombo {
    id: string
    price: number
    products: IProduct[]

    cartItem: ICartItem[]
}