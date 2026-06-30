import { Button, Discount, ProductPrice } from '@/shared'
import { cn } from '@/shared/lib/utils'
import { IProduct } from '@/shared/types'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	className?: string
	isCombo?: boolean
	product: IProduct
}

export const Product = ({ className, isCombo = false, product }: Props) => {
	return (
		<div
			className={cn(
				'group relative px-1.25 transition hover:bg-white hover:shadow-2xl lg:px-2.5',
				className,
				{ 'hover:bg-transparent hover:shadow-none': isCombo }
			)}
		>
			<Link
				href={`/${product.type.toLowerCase()}s/${product.id}`}
				className='absolute inset-0'
			></Link>
			<Discount discount={product.discount} />
			<div className='flex h-65 items-center justify-center bg-white sm:px-5.5 lg:h-82.5'>
				<Image
					src={product.images[0]}
					width={200}
					height={200}
					alt={product.title}
				/>
			</div>
			<h6 className='mt-4.5 text-center'>{product.title}</h6>
			{/* TODO: CONVERT PRICE */}
			<ProductPrice discount={product.discount} price={product.price} />
			{!isCombo && (
				<div
					className={cn(
						'relative z-1 mt-4.25 flex flex-col items-center pb-6.5 opacity-100 transition group-hover:opacity-100 lg:opacity-0'
					)}
				>
					<Button>В корзину</Button>
					<button className='text-bg-gold mt-2.75 text-center text-sm'>
						Быстрый заказ
					</button>
				</div>
			)}
		</div>
	)
}
