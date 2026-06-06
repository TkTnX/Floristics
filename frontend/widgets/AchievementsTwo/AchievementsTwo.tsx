import Image from 'next/image'

export const AchievementsTwo = () => {
	return (
		<section className='relative mx-auto flex max-w-295.75 flex-col  justify-between gap-2 px-3 pt-20 pb-22.5 sm:flex-row  lg:gap-18 w-full'>
			<div className='mt-17'>
				<Image
					src={'/images/achievements-3.jpg'}
					width={414}
					height={220}
					alt='achievements-3'
				/>
				<div className='max-w-[384px] pl-12'>
					<h4 className='mt-5.5 text-xl font-semibold'>
						Склад-шоурум
					</h4>
					<p className='mt-2.5 text-sm font-light'>
						Необычное словосочетание, не правда ли? Согласны, а ведь
						это еще и ____ квадратных метров, куда можно
						прийти/-приехать/-прилететь в любой день недели, выбрать
						понравившийся цветок и выпить вкуснейший кофе.
					</p>
				</div>
			</div>
			<div >
				<Image
					src={'/images/achievements-4.jpg'}
					width={414}
					height={220}
					alt='achievements-2'
				/>
				<div className='max-w-101 pl-12'>
					<h4 className='mt-5.5 text-xl font-semibold'>
						Флористы — альтруисты
					</h4>
					<p className='mt-2.5 text-sm font-light'>
						Если вы еще до сих пор не знаете, кто такой альтруист,
						есть отличный предлог погуглить ;) Ведь наши флористы
						всегда в курсе последних трендов в создании букетов,
						всегда учитывают ваши пожелания и помимо цветка,
						заворачивают в упаковку еще и частичку своей души :)
					</p>
				</div>
			</div>
			<Image
				src={'/images/decorations/flower-1.svg'}
				width={187}
				height={395}
				alt='Flower'
				className='absolute  left-1/3 top-15 -z-1 xl:-right-30'
			/>
		</section>
	)
}
