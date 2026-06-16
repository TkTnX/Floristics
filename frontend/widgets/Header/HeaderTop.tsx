import { ChooseCity } from './ChooseCity'
import { Currency } from './Currency'
import { Moon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const HeaderTop = () => {
	return (
		<div className='bg-bg-black text-bg-light hidden lg:block'>
			<div className='container flex items-center justify-between text-xs font-light'>
				<div className='flex items-center gap-10'>
					<button className='bg-button-pressed-bg-dark flex items-center gap-2.5 px-2.75 py-2 text-[13px]'>
						<Moon size={14} className='stroke-bg-gold -mr-1.25' />
						Ночная доставка
						<Image
							src={'/images/icons/info.svg'}
							alt='Ночная доставка'
							width={4}
							height={10}
						/>
					</button>
					<ChooseCity />
					<Link href={'/shops'}>Магазины</Link>
					<Currency />
				</div>
				<nav>
					<ul className='flex items-center gap-7.5'>
						<li>
							<Link href={'/about'}>О нас</Link>
						</li>
						<li>
							<Link href={'/delivery'}>Доставка и оплата</Link>
						</li>
						<li>
							<Link href={'/contacts'}>Контакты</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
