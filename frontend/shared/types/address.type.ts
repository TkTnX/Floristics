import { IUser } from "."

export interface IAddress {
    id: string
    city: string
    street: string
    isMain: boolean

    user: IUser
    userId: string

    createdAt: string
}