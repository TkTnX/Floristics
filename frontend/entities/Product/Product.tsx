import { Button } from '@/shared'
import { cn } from '@/shared/lib/utils'
import Image from 'next/image'

interface Props {
	className?: string
	isCombo?: boolean
}

export const Product = ({ className, isCombo = false }: Props) => {
	return (
		<div
			className={cn(
				'group px-1.25 transition hover:bg-white hover:shadow-2xl lg:px-2.5',
				className,
				{ 'hover:bg-transparent hover:shadow-none': isCombo }
			)}
		>
			<div className='flex h-65 items-center justify-center bg-white sm:px-5.5 lg:h-82.5'>
				<Image
					src={'/images/flowers/01.jpg'}
					width={200}
					height={200}
					alt='Flowers'
				/>
			</div>
			<h6 className='mt-4.5 text-center'>Букет №11 Роз спрей микс</h6>
			<p className='mt-3.25 text-center text-xl font-bold'>700 руб</p>
			{!isCombo && (
				<div
					className={cn(
						'mt-4.25 flex flex-col items-center pb-6.5 opacity-100 transition group-hover:opacity-100 lg:opacity-0'
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
