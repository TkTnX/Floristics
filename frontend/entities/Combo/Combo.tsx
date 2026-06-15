import { Product } from '@/entities/Product'
import { Button } from '@/shared'
import { ICombo } from '@/shared/types'
import { Plus } from 'lucide-react'

interface Props {
	combo: ICombo
}

export const Combo = ({ combo }: Props) => {
	const noSalePrice = combo.products[0].price + combo.products[1].price
	return (
		<div>
			<div className='border-b-bg-gold relative flex items-center justify-center border-b pb-6.5'>
				<Product
					product={combo.products[0]}
					isCombo={true}
					className='w-full px-0 lg:px-0'
				/>
				<Plus
					className='text-bg-gold absolute top-1/3 left-1/2 z-2 -translate-1/2 -translate-y-1/2'
					size={14}
				/>
				<Product
					product={combo.products[1]}
					isCombo={true}
					className='w-full px-0 lg:px-0'
				/>
			</div>
			<div className='mt-7.5 flex items-center justify-center gap-6'>
				<div>
					<p className='text-bg-sale text-sm'>
						Экономия {noSalePrice - combo.price} руб!
					</p>
					<div className='flex items-center gap-2.25 text-2xl font-semibold'>
						<p className='line-through opacity-50'>{noSalePrice}</p>
						<p>
							{combo.price} <span className='text-sm'>руб</span>
						</p>
					</div>
				</div>
				<Button>В корзину</Button>
			</div>
		</div>
	)
}
