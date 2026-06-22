'use client'
import {
	cn,
	CURRENCY,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
	useInfoStore,
} from '@/shared'
import { ChevronDown } from 'lucide-react'
import { useEffect } from 'react'

interface Props {
	className?: string
	isMobile?:boolean
}

export const Currency = ({className, isMobile=false}: Props) => {
	const { currency, setCurrency } = useInfoStore()
	const onClick = (value: string) => {
		localStorage.setItem('currency', value)
		setCurrency(value)
	}
	useEffect(() => {
		if (localStorage.getItem('currency')) {
			setCurrency(localStorage.getItem('currency') as string)
		}
	}, [setCurrency])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className={cn('flex items-center gap-0.5', className)}>
				Валюта:
				<span className='text-bg-gold'>{isMobile ? CURRENCY.find(item => item.value === currency)?.label : currency}</span>
				<ChevronDown size={14} />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='bg-bg-light w-52.5 px-7.5 py-5'>
				<DropdownMenuGroup>
					{CURRENCY.map(item => (
						<DropdownMenuItem
							onClick={() => onClick(item.value)}
							className={cn(
								'text-bg-gold cursor-pointer text-xs text-nowrap',
								{ 'text-bg-black': item.value === currency }
							)}
							key={item.value}
						>
							{item.label}
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
