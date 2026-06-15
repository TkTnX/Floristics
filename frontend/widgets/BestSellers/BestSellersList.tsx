'use client'
import { Product } from '@/entities'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ErrorMessage, Skeleton, useCategoryStore, useProducts } from '@/shared'
export const BestSellersList = () => {
	const {category} = useCategoryStore()
	const { useProductsQuery } = useProducts()
	const { data, isPending, error } = useProductsQuery({
		take: 8,
		sortBy: JSON.stringify({ rating: 'desc' }),
		where: JSON.stringify({
			flowers: {
				some: {
					id: category
				}
			}
		})
	})

	if (error) return <ErrorMessage message={error} />

	return (
		<>
			<Swiper
				modules={[Navigation, Pagination]}
				slidesPerView={2}
				breakpoints={{
					768: { slidesPerView: 4 },
					1024: {
						slidesPerView: 5
					}
				}}
				className='mt-7.5 flex'
				navigation={{
					nextEl: '.bestSellers__next-button',
					prevEl: '.bestSellers__prev-button'
				}}
			>
				{isPending
					? [...new Array(5)].map((_, index) => (
							<SwiperSlide key={index}>
								<Skeleton className='h-135.75 w-full' />
							</SwiperSlide>
						))
					: data.map(product => (
							<SwiperSlide key={product.id}>
								<Product product={product} />
							</SwiperSlide>
						))}
			</Swiper>
			<button className='bestSellers__prev-button absolute bottom-1/2 left-0 z-2 flex h-17.5 w-17.5 items-center justify-center rounded-full bg-white disabled:opacity-50'>
				<ChevronLeft />
			</button>
			<button className='bestSellers__next-button absolute right-0 bottom-1/2 z-2 flex h-17.5 w-17.5 items-center justify-center rounded-full bg-white disabled:opacity-50'>
				<ChevronRight />
			</button>
		</>
	)
}
