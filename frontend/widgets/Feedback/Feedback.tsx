import {
	Button,
	Input,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared'
import Image from 'next/image'

export const Feedback = () => {
	return (
		<section className='bg-bg-black text-bg-light relative px-5 pt-14 pb-15 sm:px-20 sm:pt-17.5 sm:pb-23.5'>
			<h2 className='relative z-2 text-center text-xl font-semibold sm:text-3xl'>
				Красивый букет — лучший подарок!
			</h2>
			<p className='relative z-2 mt-4 hidden text-center text-lg md:block'>
				Быстрый подбор (мы подберём вам идеальный вариант)
			</p>
			<form className='relative z-1 mt-11 flex grid-cols-3 flex-col items-center justify-center gap-2.5 sm:grid sm:flex-row lg:flex'>
				<Select>
					<SelectTrigger className='text-text-grey h-15! w-full lg:w-67.5'>
						<div className='flex flex-col items-start'>
							<span className='text-xs'>Цветок</span>
							<SelectValue />
						</div>
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='роза'>Роза</SelectItem>
							<SelectItem value='тюльпан'>Тюльпан</SelectItem>
							<SelectItem value='лилия'>Лилия</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger className='text-text-grey h-15! w-full lg:w-67.5'>
						<div className='flex flex-col items-start'>
							<span className='text-xs'>Событие</span>
							<SelectValue />
						</div>
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='birthday'>
								День рождения
							</SelectItem>
							<SelectItem value='wedding'>Свадьба</SelectItem>
							<SelectItem value='anniversary'>Юбилей</SelectItem>
							<SelectItem value='man'>Мужчине</SelectItem>
							<SelectItem value='mother'>Маме</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger className='text-text-grey h-15! w-full lg:w-67.5'>
						<div className='flex flex-col items-start'>
							<span className='text-xs'>Бюджет</span>
							<SelectValue />
						</div>
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='less-1500'>{'<'}1500</SelectItem>
							<SelectItem value='1500-3000'>1500-3000</SelectItem>
							<SelectItem value='3000-5000'>3000-5000</SelectItem>
							<SelectItem value='more-5000'>{'>'}5000</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Button className='bg-bg-gold col-span-3 h-15 w-full text-white lg:w-fit'>
					Подобрать
				</Button>
			</form>
			<Image
				src={'/images/decorations/flowers.svg'}
				width={897}
				height={742}
				alt='Декорации'
				className='absolute bottom-0 left-1/2 -translate-x-1/2'
			/>
		</section>
	)
}
