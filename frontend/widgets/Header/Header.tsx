import { ChevronDown, Phone } from 'lucide-react'
import { HeaderTop } from './HeaderTop'
import Image from 'next/image'
import Link from 'next/link'
import { NavMenu } from './NavMenu'
import { Search } from './Search'
import { UserButton } from '@/widgets'

export const Header = () => {
	return (
		<header>
			<HeaderTop />
			<div>
				<div className='mx-auto flex max-w-250 items-center justify-between px-3 pt-2.5 pb-5.5'>
					<div className='hidden items-start gap-2.5 lg:flex'>
						<Phone size={20} />
						<button className='text-left'>
							<p className='flex items-center'>
								+7(900)000-00-00 <ChevronDown size={14} />
							</p>
							<p className='text-bg-gold text-[13px]'>
								Обратный звонок
							</p>
						</button>
					</div>
					{/* TODO: Сделать меню */}
					<div className='flex items-center gap-3.5 lg:gap-0'>
						<button className='flex h-2.75 w-4 flex-col justify-between lg:hidden'>
							<span className='bg-bg-black h-px w-full'></span>
							<span className='bg-bg-black h-px w-full'></span>
							<span className='bg-bg-black h-px w-full'></span>
						</button>
						<Link href={'/'}>
							<Image
								src={'/images/icons/logo.svg'}
								width={203}
								height={53}
								alt='Logo'
								className='max-w-31.5 lg:max-w-full'
							/>
						</Link>
					</div>
					<div className='flex items-center gap-5 md:gap-10'>
						<Search />
						<UserButton />
						<Link
							className='flex items-center gap-1.5'
							href={'/cart'}
						>
							<Image
								src={'/images/icons/cart.svg'}
								width={15}
								height={19}
								alt='Корзина'
							/>
							<p className='bg-bg-black flex h-7 w-7 items-center justify-center rounded-full text-xs text-white lg:h-9 lg:w-9.5 lg:text-base'>
								0
							</p>
						</Link>
					</div>
				</div>
				<NavMenu />
			</div>
		</header>
	)
}
