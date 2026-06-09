import { Navigation } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
	return (
		<footer className='bg-bg-black text-bg-light relative mt-25 pt-9.25 pb-8.5'>
			<div className='relative z-3 mx-auto grid max-w-281 items-start justify-between gap-3 px-3.75 sm:grid-cols-2 md:flex'>
				<div className='sm:max-w-61.25'>
					<Link className='text-sm font-bold' href={'/'}>
						Dicentra.ru
					</Link>
					<p className='text-light mt-4.25 text-xs'>
						Мы знаем, что дарим не просто цветы, а вашу любовь. На
						самом деле, мы передаем чувства, когда собираем и
						доставляем букет. <br /> <br /> Любовь — это поступки.
						Любовь не передать словами.
					</p>
					<p className='mt-10 text-xs font-light opacity-80'>
						© Дицентра 2026 Все права защищены
					</p>
				</div>
				<nav>
					<ul className='flex flex-col gap-4.25 text-xs font-light'>
						<li className='text-sm font-semibold'>Клиентам</li>
						<li>
							<Link href={'/delivery'}>Доставка и оплата</Link>
						</li>
						<li>
							<Link href={'/contacts'}>Контакты</Link>
						</li>
						<li>
							<Link href={'/refund'}>Замена и возврат</Link>
						</li>
						<li>
							<Link href={'/sales'}>Акции</Link>
						</li>
					</ul>
					<div className='mt-7.5 flex items-center gap-1.75'>
						<Image
							src={'/images/icons/camera.svg'}
							alt='camera'
							width={20}
							height={20}
						/>
						<p className='text-xs font-semibold'>Заказ по фото</p>
					</div>
				</nav>
				<nav>
					<ul className='flex flex-col gap-4.25 text-xs font-light'>
						<li className='text-sm font-semibold'>Компания</li>
						<li>
							<Link href={'/about'}>О нас</Link>
						</li>
						<li>
							<Link href={'/shops'}>Магазины</Link>
						</li>
						<li>
							<Link href={'/reviews'}>Отзывы</Link>
						</li>
						<li>
							<Link href={'/portal'}>Портал</Link>
						</li>
					</ul>
				</nav>
				<div className='sm:row-1'>
					<p className='text-lg font-semibold'>
						Будьте в курсе последних новостей
					</p>
					<form className='mt-4.25 flex items-center rounded-[30px] bg-white sm:max-w-61.75'>
						<input
							className='text-bg-black flex-1 p-5 outline-none'
							type='email'
							placeholder='Ваш email'
						/>
						<button className='pr-5'>
							<Navigation className='text-bg-gold' />
						</button>
					</form>
					<div className='mt-6.75 flex items-center gap-4'>
						<a
							className='border-bg-gold flex h-11.75 w-11.75 items-center justify-center rounded-full border text-white'
							href='#!'
						>
							<Image
								src={'/images/icons/fb.svg'}
								width={19}
								height={19}
								alt='Facebook'
							/>
						</a>
						<a
							className='border-bg-gold flex h-11.75 w-11.75 items-center justify-center rounded-full border text-white'
							href='#!'
						>
							<Image
								src={'/images/icons/ig.svg'}
								width={19}
								height={19}
								alt='Instagram'
							/>
						</a>
					</div>
				</div>
			</div>
			<Image
				src={'/images/decorations/flowers-footer.svg'}
				alt='decorations'
				className='absolute right-0 bottom-0'
				width={857}
				height={373}
			/>
		</footer>
	)
}
