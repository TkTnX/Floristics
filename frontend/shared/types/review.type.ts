import { IProduct, IUser } from "@/shared/types"

export interface IReview {
    id: string
    rating: number
    name: string
    text: string
    image?: string

    user: IUser
    userId: string

    product: IProduct
    productId: string

    createdAt: string
}