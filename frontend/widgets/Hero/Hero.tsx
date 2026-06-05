'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { Button } from '@/shared'
import { ChevronLeft, ChevronRight } from 'lucide-react'
export const Hero = () => {
	return (
		<section className='hero relative'>
			<Swiper
				modules={[Navigation]}
				navigation={{
					nextEl: '.hero__next-button',
					prevEl: '.hero__prev-button'
				}}
			>
				<SwiperSlide>
					<div className='relative h-156.5 w-full'>
						<Image
							fill
							src={'/images/hero/01.jpg'}
							className='object-cover'
							alt='Цветы'
						/>
						<div className='bg-bg-black relative flex h-full w-1/3 items-center'>
							<div className='absolute left-1/2 -translate-x-1/2'>
								<h2 className='text-bg-light max-w-78.5 text-3xl font-black'>
									Только лучшие букеты!
								</h2>
								<p className='text-bg-light mt-5 text-lg font-light'>
									Круглосуточная доставка любви
								</p>
								<Button className='bg-bg-gold mt-12.5'>
									Выбрать букет
								</Button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative h-156.5 w-full'>
						<Image
							fill
							src={'/images/hero/01.jpg'}
							className='object-cover'
							alt='Цветы'
						/>
						<div className='bg-bg-black relative flex h-full w-1/3 items-center'>
							<div className='absolute left-1/2 -translate-x-1/2'>
								<h2 className='text-bg-light max-w-78.5 text-3xl font-black'>
									Только лучшие букеты!
								</h2>
								<p className='text-bg-light mt-5 text-lg font-light'>
									Круглосуточная доставка любви
								</p>
								<Button className='bg-bg-gold mt-12.5'>
									Выбрать букет
								</Button>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
			<div className='absolute bottom-33.25 left-[31%] z-10 flex items-center gap-4.5'>
				<button className='hero__prev-button flex h-17.5 w-17.5 items-center justify-center rounded-full bg-white'>
					<ChevronLeft />
				</button>
				<button className='hero__next-button flex h-17.5 w-17.5 items-center justify-center rounded-full bg-white'>
					<ChevronRight />
				</button>
			</div>
		</section>
	)
}
