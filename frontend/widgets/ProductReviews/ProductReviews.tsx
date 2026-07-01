'use client'
import { ProductReview } from '@/entities'
import { Button, ErrorMessage, Skeleton, useReviews } from '@/shared'
import Image from 'next/image'

interface Props {
	id: string
	rating: number
}

export const ProductReviews = ({ id, rating }: Props) => {
	const { useGetReviewsByProductIdQuery } = useReviews()
	const { data, isPending, error } = useGetReviewsByProductIdQuery(id)

	if (error) return <ErrorMessage message={error} />
	if (isPending) return <Skeleton className='h-107 w-full' />
	return (
		// TODO: Сделать слайдер
		<section className='mt-13 bg-white'>
			<div className='border-bg-gold container flex border'>
				<div className='pt-11.5 pr-16 pb-18.5 pl-12.5'>
					<h3 className='text-3xl'>Отзывы ({data.length})</h3>
					<div className='mt-5 flex items-center gap-2.5'>
						<Image
							src={'/images/icons/rose.svg'}
							width={18}
							height={17}
							alt='Роза'
						/>
						<p className='text-2xl font-bold'>{rating} /5</p>
						<button className='text-bg-gold text-sm font-light'>
							{data.length} отзывов
						</button>
					</div>
					<Button className='bg-bg-gold text-white'>
						Написать отзыв
					</Button>
				</div>
				<div className='flex flex-1'>
					{data.map(review => (
						<ProductReview
							rating={rating}
							review={review}
							key={review.id}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
