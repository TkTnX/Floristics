import { cn, NAV_ITEMS } from '@/shared'
import Link from 'next/link'

interface Props {
	className?: string
}

export const NavMenu = ({className}: Props) => {
	return (
		<nav
			className={cn(
				'mx-auto hidden max-w-247 px-3 pb-4.5 lg:block',
				className
			)}
		>
			<ul className={cn('flex items-center justify-between gap-10', className)}>
				{NAV_ITEMS.map(item => (
					<li key={item.href}>
						<Link
							className='text-xs font-bold tracking-[0.08em] uppercase transition hover:text-bg-gold'
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
