'use client'
import { Product } from '@/entities'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ErrorMessage, Skeleton, useProducts } from '@/shared'
export const SalesList = () => {
	const { useProductsQuery } = useProducts()
	const { data, isPending, error } = useProductsQuery({
		where: JSON.stringify({ discount: { gt: 0 } }),
		take: 8
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
					nextEl: '.sales__next-button',
					prevEl: '.sales__prev-button'
				}}
			>
				{isPending
					? [...new Array(5)].map((_, index) => (
							<SwiperSlide key={index}>
								<Skeleton className='h-135.75 w-full' />
							</SwiperSlide>
						))
					: data.products.map(product => (
							<SwiperSlide key={product.id}>
								<Product product={product} />
							</SwiperSlide>
						))}
			</Swiper>
			<button className='sales__prev-button absolute bottom-1/2 left-0 z-2 flex h-17.5 w-17.5 items-center justify-center rounded-full bg-white disabled:opacity-50'>
				<ChevronLeft />
			</button>
			<button className='sales__next-button absolute right-0 bottom-1/2 z-2 flex h-17.5 w-17.5 items-center justify-center rounded-full bg-white disabled:opacity-50'>
				<ChevronRight />
			</button>
		</>
	)
}
