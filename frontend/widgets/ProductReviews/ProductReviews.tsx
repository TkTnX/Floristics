'use client'
import { ProductReview } from '@/entities'
import { Button, ErrorMessage, Skeleton, useReviews } from '@/shared'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
		<section className='mt-13 -mb-25 bg-white py-25'>
			<div className='border-bg-gold relative container flex flex-col border pr-0! pl-0! lg:flex-row'>
				<div className='border-bg-gold flex-1 border-b pt-11.5 pr-16 pb-18.5 pl-12.5 lg:max-w-79'>
					<h3 className='text-3xl'>Отзывы ({data.length})</h3>
					<div className='mt-2 flex items-center gap-2.5 lg:mt-5'>
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
					<Button className='bg-bg-gold mt-5 text-white lg:mt-10'>
						Написать отзыв
					</Button>
					<div className='absolute -bottom-5 z-2 flex items-center gap-1.25 lg:static lg:mt-20'>
						<button className='product__prev-button bg-bg-black flex h-12.5 w-12.5 items-center justify-center rounded-full disabled:opacity-50'>
							<ChevronLeft className='text-white' />
						</button>
						<button className='product__next-button bg-bg-black flex h-12.5 w-12.5 items-center justify-center rounded-full disabled:opacity-50'>
							<ChevronRight className='text-white' />
						</button>
					</div>
				</div>
				<Swiper
					modules={[Navigation]}
					breakpoints={{
						1024: { slidesPerView: 2 }
					}}
					navigation={{
						nextEl: '.product__next-button',
						prevEl: '.product__prev-button'
					}}
					className='w-full! flex-1'
					slidesPerView={1}
				>
					{data.map(review => (
						<SwiperSlide
							className='border-bg-gold border-x last:border-0'
							key={review.id}
						>
							<ProductReview rating={rating} review={review} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
