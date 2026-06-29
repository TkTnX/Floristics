'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	FilterButton,
	Input
} from '@/shared'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
	min: number
	max: number
	className?: string
}

export const PriceFilter = ({ min, max, className }: Props) => {
	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams.toString())
	const router = useRouter()
	const onChange = (type: 'min' | 'max', value: number) => {
		if (value <= 0) {
			params.delete(type)
			router.push(`?${params.toString()}`)
			return
		}
		params.delete(type)
		params.append(type, String(value))
		router.push(`?${params.toString()}`)
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton className={className} name='Цена' />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-61.25 px-6 py-5'>
				<div className='flex items-center gap-0.75'>
					<Input
						onChange={e => onChange('min', Number(e.target.value))}
						placeholder={String(min)}
						max={max}
						min={min}
						defaultValue={min}
						type='number'
						className='border-bg-gold h-12.5 max-w-19'
					/>

					<span className='text-text-grey text-sm font-light'>—</span>
					<Input
						onChange={e => onChange('max', Number(e.target.value))}
						placeholder={String(max)}
						max={max}
						min={min}
						defaultValue={max}
						type='number'
						className='border-bg-gold h-12.5 max-w-19'
					/>
					<span className='text-text-grey text-sm font-light'>
						руб
					</span>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
