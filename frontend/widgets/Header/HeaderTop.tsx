'use client'
import { DeliveryTooltip } from './DeliveryTooltip'
import { ChooseCity } from './ChooseCity'
import { Currency } from './Currency'
import Link from 'next/link'

export const HeaderTop = () => {
	return (
		<div className='bg-bg-black text-bg-light hidden lg:block'>
			<div className='container flex items-center justify-between text-xs font-light'>
				<div className='flex items-center gap-10'>
					<DeliveryTooltip />
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
