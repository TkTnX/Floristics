import { Button } from '@/shared'
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
				// TODO: По типу поиск
				href={`/${product.type}/${product.id}`}
				className='absolute inset-0'
			></Link>
			{product.discount && (
				<p className='text-bg-gold absolute top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full text-xs font-bold'>
					<Image
						src={'/images/icons/discount-outline.svg'}
						fill
						alt='Обводка'
					/>
					-{product.discount}%
				</p>
			)}
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
			<div className='mt-3.25 flex items-center justify-center gap-3 text-xl'>
				{product.discount && (
					<p className='text-bg-black font-semibold line-through opacity-50'>
						{product.price}
					</p>
				)}
				<p className='text-center font-bold'>
					{product.discount
						? Math.floor(
								product.price -
									(product.price * product.discount) / 100
							)
						: product.price}{' '}
					руб
				</p>
			</div>
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
