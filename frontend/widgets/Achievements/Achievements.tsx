import Image from 'next/image'

export const Achievements = () => {
	return (
		<section className='relative mx-auto flex flex-col sm:flex-row items-end lg:items-start max-w-295.75 gap-2 lg:gap-18 px-3 pt-20 pb-22.5 '>
			<div className='flex-1'>
				<p className='max-w-138.25 sm:pl-12 text-xl leading-[150%]'>
					Мы создали Dicentra для того, чтобы вам больше не пришлось
					думать, как именно лучше выразить свои чувства.
				</p>
				<Image
					src={'/images/achievements-1.jpg'}
					width={414}
					height={220}
					alt='achievements-1'
					className='mt-2 lg:mt-10'
				/>
				<div className='max-w-82.5 pl-12'>
					<h4 className='mt-5.5 text-xl font-semibold'>
						Сервис с первой секунды
					</h4>
					<p className='mt-2.5 text-sm font-light'>
						Мы скрупулезно контролируем все этапы взаимодействия с
						нашими клиентами, от момента оформления заказа до его
						полного выполнения.
					</p>
				</div>
			</div>
			<div className='mt-4 lg:mt-17.5 flex-1'>
				<Image
					src={'/images/achievements-2.jpg'}
					width={414}
					height={220}
					alt='achievements-2'
				/>
				<div className='max-w-82.5 pl-12'>
					<h4 className='mt-5.5 text-xl font-semibold'>
						Вау-ассортимент
					</h4>
					<p className='mt-2.5 text-sm font-light'>
						И здесь тоже нам не до шуток! <br /> <br /> 4676 видов
						срезанных цветов и около 100 видов горшечных растений.
					</p>
				</div>
			</div>
			<Image
				src={'/images/decorations/flower-1.svg'}
				width={331}
				height={528}
				alt='Flower'
				className='absolute top-0 right-0 xl:-right-30 -z-1'
			/>
		</section>
	)
}
