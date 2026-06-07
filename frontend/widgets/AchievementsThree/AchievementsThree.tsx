import Image from 'next/image'

export const AchievementsThree = () => {
	return (
		<section className='relative mx-auto flex max-w-295.75 flex-col items-end gap-2 px-3 pt-20 pb-22.5 sm:flex-row lg:items-start lg:gap-18'>
			<div className=''>
				<p className='max-w-138.25 text-xl leading-[150%] sm:pl-12'>
					Цветы – это не просто подарок по поводу, это-еще один способ
					подчеркнуть вашу уникальность.
				</p>
				<div className='flex items-start gap-29.5'>
					<div className='mt-26'>
						<div>
							<Image
								src={'/images/achievements-5.jpg'}
								width={263}
								height={359}
								alt='achievements-5'
								className='mt-2 lg:mt-10'
							/>
							<div className='max-w-76.5'>
								<h4 className='mt-5.5 text-xl font-semibold'>
									Букеты
								</h4>
								<p className='mt-2.5 text-sm font-light'>
									Самые свежие и крутые букеты всегда в
									наличии у нас на сайте. Заказывайте
								</p>
							</div>
						</div>
						<div className='mt-22.5'>
							<Image
								src={'/images/achievements-6.jpg'}
								width={307}
								height={232}
								alt='achievements-6'
								className='mt-2 lg:mt-10'
							/>
							<div className='max-w-82.5'>
								<h4 className='mt-5.5 text-xl font-semibold'>
									Услуги
								</h4>
							</div>
						</div>
					</div>
					<div>
						<div>
							<Image
								src={'/images/achievements-7.jpg'}
								width={277}
								height={232}
								alt='achievements-7'
								className='mt-2 lg:mt-10'
							/>
							<div className='max-w-75'>
								<h4 className='mt-5.5 text-xl font-semibold'>
									Розы
								</h4>
								<p className='mt-2.5 text-sm font-light'>
									Букет из роз можно без конца дополнять
									другими растениями и элементами: они всегда
									идеальны-как в сочетании, так и
									самостоятельно
								</p>
							</div>
						</div>
						<div className='mt-22.5'>
							<Image
								src={'/images/achievements-8.jpg'}
								width={307}
								height={232}
								alt='achievements-8'
								className='mt-2 lg:mt-10'
							/>
							<div className='max-w-75'>
								<h4 className='mt-5.5 text-xl font-semibold'>
									Комнатные растения
								</h4>
								<p className='mt-2.5 text-sm font-light'>
									Букет из роз можно без конца дополнять
									другими растениями и элементами: они всегда
									идеальны-как в сочетании, так и
									самостоятельно
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=''>
				<div>
					<Image
						src={'/images/achievements-9.jpg'}
						width={307}
						height={232}
						alt='achievements-9'
					/>
					<div className='max-w-82.5'>
						<h4 className='mt-5.5 text-xl font-semibold'>Цветы</h4>
						<p className='mt-2.5 text-sm font-light'>
							Подарите любимым и близким букет цветов, покажите им
							свои истинные чувства ❤
						</p>
					</div>
				</div>
				<div className='mt-19'>
					<Image
						src={'/images/achievements-10.jpg'}
						width={307}
						height={359}
						alt='achievements-10'
					/>
					<div className='max-w-82.5'>
						<h4 className='mt-5.5 text-xl font-semibold'>
							Подарки
						</h4>
						<p className='mt-2.5 text-sm font-light'>
							Букет из роз можно без конца дополнять другими
							растениями и элементами: они всегда идеальны-как в
							сочетании, так и самостоятельно
						</p>
					</div>
				</div>
			</div>
			<Image
				src={'/images/decorations/flower-1.svg'}
				width={331}
				height={528}
				alt='Flower'
				className='absolute top-1/2 right-1/4 -z-1 -translate-y-1/2'
			/>
		</section>
	)
}
