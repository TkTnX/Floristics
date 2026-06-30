'use client'
import Image from 'next/image'
import { BigProductImages } from './BigProductImages'
import { IProduct } from '@/shared/types'
import { Button, Input, ProductPrice } from '@/shared'
import { Minus, Plus } from 'lucide-react'

interface Props {
	product: IProduct
}

// TODO: Сделать SIZE

export const BigProduct = ({ product }: Props) => {
	console.log(product)
	return (
		<section className='container'>
			<h2 className='mt-4 text-center text-3xl'>{product.title}</h2>

			<div className='mt-6.5 flex items-start bg-white'>
				<BigProductImages
					discount={product.discount}
					images={product.images}
				/>
				<div className='border-bg-light h-full flex-1 border-l pt-8 pr-8.75 pl-11.5'>
					<div className='border-b-bg-light flex items-center justify-between border-b pb-6'>
						<div className='flex items-center gap-7.5'>
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
					<div className='mt-4.5 flex items-center gap-2.5'>
						<div className='border-bg-gold flex h-15 w-fit items-center gap-7.5 rounded-full border px-5'>
							<button>
								<Minus className='text-bg-gold' size={11} />
							</button>
							<span className='text-lg'>1</span>
							<button>
								<Plus className='text-bg-gold' size={11} />
							</button>
						</div>
						<Button>Добавить в корзину</Button>
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
					<div className='mt-10.5'>
						<div className='border-bg-light border-b'>
							<button className='texdt-sm border-bg-gold border-b px-5 pb-4.25 font-bold'>
								Характеристики
							</button>
							<button className='texdt-sm px-5 pb-4.25 font-bold'>
								Описание
							</button>
							<button className='texdt-sm px-5 pb-4.25 font-bold'>
								Доставка
							</button>
						</div>
						<div className='text-sm font-light mt-5.5'>
							{product.size && (
								<p className='grid grid-cols-[60px_1fr] gap-7'>
									<span className='opacity-80'>Размер</span>{' '}
									{product.size}
								</p>
							)}
							{product.colors.length > 0 && (
								<p className='grid grid-cols-[60px_1fr] gap-7'>
									<span className='opacity-80'>Цвет</span>{' '}
									{product.colors.map(color => color.name)}
								</p>
							)}
							{product.flowers.length > 0 && (
								<p className='grid grid-cols-[60px_1fr] gap-7'>
									<span className='opacity-80'>Состав</span>{' '}
									{product.flowers.map(flower => flower.name)}
								</p>
							)}
							{product.events.length > 0 && (
								<p className='grid grid-cols-[60px_1fr] gap-7'>
									<span className='opacity-80'>Событие</span>{' '}
									{product.events.map(event => event.name)}
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
