import { IAddress, ICart, IReview } from "."

export interface IUser {
    id: string
    fio: string
    emails: string[]
    phones: string[]
    addresses: IAddress[]
    reviews: IReview[]
    cart: ICart
    createdAt: string
}