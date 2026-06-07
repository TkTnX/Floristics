'use client'
import { Combo } from '@/entities'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
export const CombosList = () => {
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
					nextEl: '.combos__next-button',
					prevEl: '.combos__prev-button'
				}}
			>
				<SwiperSlide>
					<Combo />
				</SwiperSlide>
				<SwiperSlide>
					<Combo />
				</SwiperSlide>
				<SwiperSlide>
					<Combo />
				</SwiperSlide>
				<SwiperSlide>
					<Combo />
				</SwiperSlide>
			</Swiper>
			<button className='combos__prev-button absolute bottom-1/2 left-0 z-2 flex h-17.5 w-17.5 items-center justify-center rounded-full bg-white disabled:opacity-50'>
				<ChevronLeft />
			</button>
			<button className='combos__next-button absolute right-0 bottom-1/2 z-2 flex h-17.5 w-17.5 items-center justify-center rounded-full bg-white disabled:opacity-50'>
				<ChevronRight />
			</button>
		</>
	)
}
