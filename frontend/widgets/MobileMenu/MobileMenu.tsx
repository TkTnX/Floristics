'use client'
import {
	Drawer,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger,
	FOOTER_NAV_ITEMS,
	NAV_ITEMS
} from '@/shared'
import { DeliveryTooltip, ChooseCity, UserButton, Currency } from '@/widgets'
import Image from 'next/image'
import Link from 'next/link'

export const MobileMenu = () => {
	return (
		<Drawer direction='left'>
			<DrawerTrigger asChild>
				<button className='flex h-2.75 w-4 flex-col justify-between lg:hidden'>
					<span className='bg-bg-black h-px w-full'></span>
					<span className='bg-bg-black h-px w-full'></span>
					<span className='bg-bg-black h-px w-full'></span>
				</button>
			</DrawerTrigger>
			<DrawerContent className='z-2 overflow-y-auto pt-16 w-full! max-w-screen! sm:max-w-100! sm:w-auto'>
				<DeliveryTooltip isMobile={true} className='px-5 text-white' />
				<div className='w-full px-5'>
					<ChooseCity
						iconSize={20}
						className='w-full border-b border-[#f0eae7] py-4.5 text-sm'
					/>
					<ul className={'flex flex-col justify-between'}>
						{NAV_ITEMS.map(item => (
							<li key={item.href}>
								<Link
									className='block w-full border-b py-4.5 text-xs font-bold tracking-[0.08em] uppercase transition hover:opacity-80'
									href={item.href}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<Link
					className='flex items-center gap-2 bg-[#f0eae7] px-5 py-2'
					href={'/make'}
				>
					<div className='bg-bg-black flex h-10 w-10 items-center justify-center rounded-full'>
						<Image
							src={'/images/icons/flower.svg'}
							width={23}
							height={21}
							alt='Flower'
						/>
					</div>
					<div>
						<p className='text-bg-sale text-[8px] tracking-[0.02em] uppercase'>
							Новинка
						</p>
						<p className='text-sm'>Создайте свой букет</p>
					</div>
				</Link>
				<UserButton className='flex border-b border-[#f0eae7] px-5 py-4.5' />
				<Currency
					isMobile={true}
					className='border-b border-[#f0eae7] px-5 py-4.5 font-light'
				/>
				<div className='w-full border-b border-[#f0eae7] px-5 pb-4.5'>
					<p className='text-bg-gold mt-3.75 text-[10px] tracking-[0.03em] uppercase'>
						СНГ
					</p>
					<p className='mt-1.75 text-sm'>+7(900)000-00-00</p>
				</div>
				<ul className='grid grid-cols-2 justify-between gap-2 text-xs font-light px-5 py-4.5'>
					{FOOTER_NAV_ITEMS.map((item, index) => (
						<li key={index}>
							<Link href={item.href}>{item.label}</Link>
						</li>
					))}
				</ul>
				<DrawerTitle />
			</DrawerContent>
		</Drawer>
	)
}
