import { IProduct, ICombo, ICart } from '@/shared/types'

export interface ICartItem {
	id: string
	quantity: number
	product: IProduct
	productId: string
	combo: ICombo
	comboId: string
	cart: ICart
	cartId: string
	createdAt: string
}
