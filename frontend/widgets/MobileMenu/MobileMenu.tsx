'use client'
import {
	Drawer,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger,
	NAV_ITEMS
} from '@/shared'
import { DeliveryTooltip, ChooseCity, UserButton } from '@/widgets'
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
			<DrawerContent className='pt-16 overflow-y-auto'>
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
                <UserButton className='flex px-5 py-4.5' />
				<DrawerTitle />
			</DrawerContent>
		</Drawer>
	)
}
