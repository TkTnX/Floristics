'use client'
import Image from 'next/image'
import { BigProductImages } from './BigProductImages'
import { IProduct } from '@/shared/types'
import { Button, Input, ProductPrice } from '@/shared'
import { Minus, Plus } from 'lucide-react'
import { BigProductTabs } from './BigProductTabs'

interface Props {
	product: IProduct
}

// TODO: Сделать SIZE у картинки

export const BigProduct = ({ product }: Props) => {
	return (
		<section className='container'>
			<h2 className='mt-4 text-center text-3xl'>{product.title}</h2>

			<div className='mt-6.5 flex flex-col items-center bg-white xl:flex-row xl:items-start'>
				<BigProductImages
					discount={product.discount}
					images={product.images}
				/>
				<div className='border-bg-light h-full w-full flex-1 border-l pt-8 pr-8.75 pl-11.5'>
					<div className='border-b-bg-light flex flex-col-reverse items-start justify-between gap-2 border-b pb-6 sm:flex-row sm:items-center'>
						<div className='flex items-center gap-2 sm:gap-7.5'>
							<p className='text-xs font-light'>Есть в наличии</p>
							<div className='flex items-center gap-2.5'>
								<Image
									src={'/images/icons/rose.svg'}
									width={18}
									height={17}
									alt='Роза'
								/>
								<p className='font-bold'>{product.rating} /5</p>
								<button className='text-bg-gold text-sm font-light'>
									{product._count.reviews} отзывов
								</button>
							</div>
						</div>
						<p className='rounded-[32px] bg-[#f8f5f4] px-2.25 py-1.25 text-xs'>
							Артикул: {product.id}
						</p>
					</div>
					<ProductPrice
						className='justify-start'
						discount={product.discount}
						price={product.price}
					/>
					<div className='mt-4.5 flex w-full flex-col items-center gap-2.5 sm:flex-row'>
						<div className='border-bg-gold flex w-full flex-1 items-center justify-center gap-7.5 rounded-full border px-5 py-3.5 sm:w-fit sm:flex-0'>
							<button>
								<Minus className='text-bg-gold' size={11} />
							</button>
							<span className='text-lg'>1</span>
							<button>
								<Plus className='text-bg-gold' size={11} />
							</button>
						</div>
						<Button className='w-full flex-1 sm:w-fit sm:flex-[unset]'>
							Добавить в корзину
						</Button>
					</div>
					<div className='mt-4.5'>
						<p className='flex items-center gap-1.5'>
							Быстрый заказ{' '}
							<Image
								src={'/images/icons/info.svg'}
								width={18}
								height={10}
								alt='Инфо'
								className='bg-bg-light rounded-full px-1.75 py-1'
							/>
						</p>
						{/* TODO: ADD MASK */}
						<Input
							placeholder='+7(___)___-__-__'
							className='border-bg-gold mt-3.5'
						/>
					</div>
					<BigProductTabs  product={product} />
				</div>
			</div>
		</section>
	)
}
