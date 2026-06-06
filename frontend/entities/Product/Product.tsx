import { Button } from '@/shared'
import Image from 'next/image'

export const Product = () => {
	return (
		<div className='group px-1.25 lg:px-2.5 transition hover:bg-white hover:shadow-2xl'>
			<div className='flex h-65 lg:h-82.5 items-center justify-center bg-white px-5.5'>
				<Image
					src={'/images/flowers/01.jpg'}
					width={200}
					height={200}
					alt='Flowers'
				/>
			</div>
			<h6 className='mt-4.5 text-center'>Букет №11 Роз спрей микс</h6>
			<p className='mt-3.25 text-center text-xl font-bold'>700 руб</p>
			<div className='mt-4.25 flex flex-col items-center pb-6.5 opacity-100 lg:opacity-0 transition group-hover:opacity-100'>
				<Button>В корзину</Button>
				<button className='text-bg-gold mt-2.75 text-center text-sm'>
					Быстрый заказ
				</button>
			</div>
		</div>
	)
}
