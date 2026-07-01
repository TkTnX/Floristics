import { Button, ProductPrice } from '@/shared'
import { ICombo } from '@/shared/types'
import { Equal, Plus } from 'lucide-react'
import Image from 'next/image'

interface Props {
	combo: ICombo
}

export const BigCombo = ({ combo }: Props) => {
	const noSalePrice = combo.products[0].price + combo.products[1].price
	return (
		<section className='mt-3.25 bg-white p-5 container'>
			<div className='flex items-center justify-between gap-2 border border-[#e2d7d0] py-5.5 pr-9.75 pl-12.75'>
				<p className='text-2xl'>
					Вместе <br /> дешевле
				</p>
				<div className='flex items-start gap-6.25'>
					<Image
						src={combo.products[0].images[0]}
						alt={combo.products[0].title}
						width={133}
						height={142}
					/>
					<div className='flex flex-col gap-3'>
						<h5 className='text-sm font-light'>
							{combo.products[0].title}
						</h5>
						<ProductPrice
							className='justify-start'
							price={combo.products[0].price}
							discount={combo.products[0].discount}
						/>
					</div>
				</div>
				<Plus className='text-bg-gold' />
				<div className='flex items-start gap-6.25'>
					<Image
						src={combo.products[1].images[0]}
						alt={combo.products[1].title}
						width={133}
						height={142}
					/>
					<div className='flex flex-col gap-3'>
						<h5 className='text-sm font-light'>
							{combo.products[1].title}
						</h5>
						<ProductPrice
							className='justify-start'
							price={combo.products[1].price}
							discount={combo.products[1].discount}
						/>
					</div>
				</div>
				<Equal className='text-bg-gold' />
				<div>
					<div>
						<p className='text-bg-sale text-sm'>
							Экономия {noSalePrice - combo.price} руб!
						</p>
						<div className='flex items-center gap-2.25 text-2xl font-semibold'>
							<p className='line-through opacity-50'>
								{noSalePrice}
							</p>
							<p className='mt-1.25'>
								{combo.price}{' '}
								<span className='text-sm'>руб</span>
							</p>
						</div>
					</div>
					<Button className='mt-3.25'>В корзину</Button>
				</div>
			</div>
		</section>
	)
}
