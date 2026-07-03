import { IFlower, IPackaging, IReview, ICartItem, ICombo, IColor, IEvent } from '.'

export interface IProduct {
	id: string
	title: string
	price: number
	size?: string
	images: string[]
	discount?: number
	type: EProductType
	rating: number
	description: string
	_count: {
		reviews: number
	}
	colors: IColor[]
	flowers: IFlower[]
	packaging: IPackaging[]
	reviews: IReview[]
	cartItem: ICartItem[]
	combo: ICombo[]
	events: IEvent[]
}

export enum EProductType {
	FLOWER = 'flower',
	BOUQUET = 'bouquet',
	SWEET = 'sweet'
}

export const ProductTypeNames = {
	[EProductType.FLOWER]: 'Цветы',
	[EProductType.BOUQUET]: 'Букеты',
	[EProductType.SWEET]: 'Сладости'
}
