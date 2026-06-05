import { NAV_ITEMS } from '@/shared'
import Link from 'next/link'

export const NavMenu = () => {
	return (
		<nav className='mx-auto max-w-247 pb-4.5 px-3 hidden lg:block'>
			<ul className='flex items-center justify-between gap-10'>
				{NAV_ITEMS.map(item => (
					<li key={item.href}>
						<Link
							className='text-xs font-bold tracking-[0.08em] uppercase transition hover:opacity-80'
							href={item.href}
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
