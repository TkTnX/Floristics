import { ICartItem, IUser } from "."

export interface ICart {
    id: string
    totalPrice: number

    products: ICartItem[]
    user: IUser
    userId: string

    createdAt: string
}