'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { Button } from '@/shared'
import { ChevronLeft, ChevronRight } from 'lucide-react'
export const Hero = () => {
	return (
		<section className='hero relative'>
			<Swiper
				modules={[Navigation, Pagination]}
				navigation={{
					nextEl: '.hero__next-button',
					prevEl: '.hero__prev-button'
				}}
				pagination={{ clickable: true, el: '.hero__pagination' }}
			>
				<SwiperSlide>
					<div className='relative h-50 w-full md:h-117.25 xl:h-156.5'>
						<Image
							fill
							src={'/images/hero/01.jpg'}
							className='object-cover'
							alt='Цветы'
						/>
					</div>
					<div className='bg-bg-black top-0 flex h-full items-center justify-center pt-6 pb-22 text-center md:absolute md:w-1/3 md:py-0 md:text-left'>
						<div className='w-full px-5 lg:px-20'>
							<h2 className='text-bg-light text-3xl font-black md:max-w-78.5'>
								Только лучшие букеты!
							</h2>
							<p className='text-bg-light text-lg font-light md:mt-5'>
								Круглосуточная доставка любви
							</p>
							<Button className='bg-bg-gold mt-3 md:mt-12.5'>
								Выбрать букет
							</Button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative h-50 w-full md:h-117.25 xl:h-156.5'>
						<Image
							fill
							src={'/images/hero/01.jpg'}
							className='object-cover'
							alt='Цветы'
						/>
					</div>
					<div className='bg-bg-black top-0 flex h-full items-center justify-center pt-6 pb-22 text-center md:absolute md:w-1/3 md:py-0 md:text-left'>
						<div className='w-full px-5 lg:px-20'>
							<h2 className='text-bg-light text-3xl font-black md:max-w-78.5'>
								Только лучшие букеты!
							</h2>
							<p className='text-bg-light text-lg font-light md:mt-5'>
								Круглосуточная доставка любви
							</p>
							<Button className='bg-bg-gold mt-3 md:mt-12.5'>
								Выбрать букет
							</Button>
						</div>
					</div>
				</SwiperSlide>
			
			</Swiper>
			<div className='absolute bottom-10 left-[32%]! z-1 hidden items-center justify-center  gap-4.5 md:flex xl:bottom-33.25'>
				<button className='hero__prev-button flex h-17.5 w-17.5 items-center justify-center rounded-full bg-white disabled:opacity-50'>
					<ChevronLeft />
				</button>
				<button className='hero__next-button flex h-17.5 w-17.5 items-center justify-center rounded-full bg-white disabled:opacity-50'>
					<ChevronRight />
				</button>
			</div>
			<div className='hero__pagination absolute bottom-10 left-1/2 z-3 flex items-center gap-5 md:hidden'></div>
		</section>
	)
}
