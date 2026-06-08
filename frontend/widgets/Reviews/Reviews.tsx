import { ReviewsList } from './ReviewsList'

export const Reviews = () => {
	return (
		<section className='bg-bg-light pt-16 pb-17'>
			<div className='relative mx-auto max-w-322.5 px-3.75'>
				<h2 className='text-center text-3xl font-semibold'>
					Отзывы клиентов
				</h2>
				<ReviewsList />
			</div>
		</section>
	)
}
