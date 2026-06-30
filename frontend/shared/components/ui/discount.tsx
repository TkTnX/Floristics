import { cn } from '@/shared/lib'
import Image from 'next/image'

interface Props {
    discount?: number
    className?: string
}
export const Discount = ({ discount, className }: Props) => {
	return (
		discount && (
			<p
				className={cn(
					'text-bg-gold absolute top-5 left-5 z-10 flex h-12 w-12 items-center justify-center rounded-full text-xs font-bold', className
				)}
			>
				<Image
					src={'/images/icons/discount-outline.svg'}
					fill
					alt='Обводка'
				/>
				-{discount}%
			</p>
		)
	)
}
