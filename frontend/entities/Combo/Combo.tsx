import { Product } from '@/entities/Product'
import { Button } from '@/shared'
import { Plus } from 'lucide-react'

export const Combo = () => {
	return (
		<div>
			<div className='border-b-bg-gold relative flex items-center justify-center border-b pb-6.5'>
				<Product isCombo={true} className='w-full px-0 lg:px-0' />
				<Plus
					className='text-bg-gold absolute top-1/3 left-1/2 z-2 -translate-1/2 -translate-y-1/2'
					size={14}
				/>
				<Product isCombo={true} className='w-full px-0 lg:px-0' />
			</div>
			<div className='mt-7.5 flex items-center justify-center gap-6'>
				<div>
					<p className='text-bg-sale text-sm'>Экономия 230 руб!</p>
					<div className='flex items-center gap-2.25 text-2xl font-semibold'>
						<p className='line-through opacity-50'>1 490</p>
						<p>
							1 260 <span className='text-sm'>руб</span>
						</p>
					</div>
				</div>
				<Button>В корзину</Button>
			</div>
		</div>
	)
}
