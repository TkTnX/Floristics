import { IFlower, IPackaging, IReview, ICartItem, ICombo } from "."

export interface IProduct {
    id: string
    title: string
    price: number
    size?: string
    event?: string
    images: string[]
    discount?: number
    type: EProductType 

    flowers: IFlower[]
    packaging: IPackaging[]
    reviews: IReview[]
    cartItem: ICartItem[]
    combo: ICombo[]
}

export enum EProductType {
    FLOWERS = 'flowers',
    BOUQUETS = 'bouquets',
    SWEETS = 'sweets'
}