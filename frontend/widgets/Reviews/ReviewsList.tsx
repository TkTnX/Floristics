'use client'
import { Review } from '@/entities'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ErrorMessage, Skeleton, useReviews } from '@/shared'
export const ReviewsList = () => {
	const { useReviewsQuery } = useReviews()
	const { data, isPending, error } = useReviewsQuery({ take: 4 })

	if (error) return <ErrorMessage message={error} />
	return (
		<>
			<Swiper
				modules={[Navigation]}
				slidesPerView={1}
				spaceBetween={10}
				breakpoints={{
					485: { slidesPerView: 1.2 },
					768: {
						slidesPerView: 2
					}
				}}
				className='mt-5.5 flex items-center justify-center gap-2.5'
				navigation={{
					nextEl: '.reviews__next-button',
					prevEl: '.reviews__prev-button'
				}}
			>
				{isPending
					? [...new Array(5)].map((_, index) => (
							<SwiperSlide key={index}>
								<Skeleton className='h-63.75 w-full' />
							</SwiperSlide>
						))
					: data.map(review => (
							<SwiperSlide key={review.id}>
								<Review review={review} />
							</SwiperSlide>
						))}
			</Swiper>
			<div className='absolute right-14 -bottom-6.25 z-2 flex items-center gap-1.25'>
				<button className='reviews__prev-button bg-bg-black flex h-12.5 w-12.5 items-center justify-center rounded-full disabled:opacity-50'>
					<ChevronLeft className='text-white' />
				</button>
				<button className='reviews__next-button bg-bg-black flex h-12.5 w-12.5 items-center justify-center rounded-full disabled:opacity-50'>
					<ChevronRight className='text-white' />
				</button>
			</div>
		</>
	)
}
