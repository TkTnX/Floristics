/* eslint-disable react/display-name */
import { cn } from '@/shared/lib'
import { ChevronDown } from 'lucide-react'
import { forwardRef } from 'react'

interface Props {
	name: string
	className?: string
	Icon?: React.ReactNode
}

export const FilterButton = forwardRef<HTMLButtonElement, Props>(
	({ name, className, Icon = <ChevronDown />, ...props }, ref) => {
		return (
			<button
				ref={ref}
				{...props}
				className={cn(
					'border-bg-gold flex w-full items-center justify-between rounded-full border px-5 py-4 text-left font-light transition hover:border-white hover:bg-white lg:w-47.5',
					className
				)}
			>
				{name} {Icon}
			</button>
		)
	}
)
