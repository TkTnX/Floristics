import { BestSellerCategories } from './BestSellerCategories'
import { BestSellersList } from './BestSellersList'

export const BestSellers = () => {
	return (
		<section className='bg-bg-light pt-16'>
			<div className='relative mx-auto max-w-322.5 px-3.75'>
				<h2 className='text-center text-3xl font-semibold'>
					Наши бестселлеры
				</h2>
				<BestSellerCategories />
				<BestSellersList />
			</div>
		</section>
	)
}
