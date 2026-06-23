import { cn } from '@/shared/lib';
import Link from 'next/link'

interface Props {
    items: { label: string; href?: string }[]
    className?:string
}

export const Breadcrumbs = ({ items, className }: Props) => {
	return (
		<div
			className={cn(
				'flex items-center justify-center gap-1 text-sm font-light opacity-70', className
			)}
		>
			<Link className='' href={'/'}>
				Главная
			</Link>
			{items.map((item, index) =>
				item.href ? (
					<Link className='' key={index} href={item.href}>
						/ {item.label}
					</Link>
				) : (
					<span key={index}>/ {item.label}</span>
				)
			)}
		</div>
	)
}
