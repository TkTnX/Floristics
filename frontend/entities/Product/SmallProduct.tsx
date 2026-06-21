import { IProduct } from '@/shared/types'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	product: IProduct
}

export const SmallProduct = ({ product }: Props) => {
	return (
		<div className='relative text-center'>
			<Link
				href={`/products/${product.id}`}
				className='absolute inset-0 z-2'
			></Link>
			<div className='relative flex h-32.25 w-full items-center justify-center bg-white'>
				<Image
					src={product.images[0]}
					width={67}
					height={68}
					alt={product.title}
				/>
			</div>
			<p className='mt-2.75 text-sm font-light'>{product.title}</p>
			{/* TODO: Везде сделать currency адаптивным */}
			<p className='mt-1.25 font-semibold'>
				{product.price} <span className='text-sm'>руб</span>
			</p>
		</div>
	)
}
