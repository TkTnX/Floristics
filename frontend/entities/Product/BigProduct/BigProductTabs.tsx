import { cn } from '@/shared'
import { IProduct } from '@/shared/types'
import { useState } from 'react'

interface Props {
	product: IProduct
}

export const BigProductTabs = ({ product }: Props) => {
	const [tab, setTab] = useState(0)
	return (
		<div className='mt-10.5 pb-10'>
			<div className='border-bg-light flex items-center overflow-x-auto border-b'>
				<button
					onClick={() => setTab(0)}
					className={cn('border-b px-5 pb-4.25 text-sm font-bold', {
						'border-bg-gold': tab === 0
					})}
				>
					Характеристики
				</button>
				<button
					onClick={() => setTab(1)}
					className={cn('border-b px-5 pb-4.25 text-sm font-bold', {
						'border-bg-gold': tab === 1
					})}
				>
					Описание
				</button>
				<button
					onClick={() => setTab(2)}
					className={cn('border-b px-5 pb-4.25 text-sm font-bold', {
						'border-bg-gold': tab === 2
					})}
				>
					Доставка
				</button>
			</div>
			<div className='mt-5.5 text-sm font-light'>
				{tab === 0 && (
					<>
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
					</>
				)}
				{tab === 1 && (
					<p className='text-xs font-light'>{product.description}</p>
				)}
				{tab === 2 && <p>Доставка есть</p>}
			</div>
		</div>
	)
}
