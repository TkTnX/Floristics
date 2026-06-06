'use client'
import { Product } from '@/entities'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'
export const BestSellersList = () => {
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
				<SwiperSlide>
					<Product />
				</SwiperSlide>
				<SwiperSlide>
					<Product />
				</SwiperSlide>
				<SwiperSlide>
					<Product />
				</SwiperSlide>
				<SwiperSlide>
					<Product />
				</SwiperSlide>
				<SwiperSlide>
					<Product />
				</SwiperSlide>
				<SwiperSlide>
					<Product />
				</SwiperSlide>
				<SwiperSlide>
					<Product />
				</SwiperSlide>
			</Swiper>
			<div className='absolute bottom-1/2 left-0 z-10 hidden w-full items-center justify-between md:flex'>
				<button className='bestSellers__prev-button flex h-17.5 w-17.5 items-center justify-center rounded-full bg-white disabled:opacity-50'>
					<ChevronLeft />
				</button>
				<button className='bestSellers__next-button flex h-17.5 w-17.5 items-center justify-center rounded-full bg-white disabled:opacity-50'>
					<ChevronRight />
				</button>
			</div>
		</>
	)
}
