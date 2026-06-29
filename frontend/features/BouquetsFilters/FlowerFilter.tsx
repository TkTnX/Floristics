'use client'
import {
	cn,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	ErrorMessage,
	FilterButton,
	Skeleton,
	useFlowers,
	useQueryFilters
} from '@/shared'

import { Check } from 'lucide-react'

interface Props {
	className?:string
}

export const FlowerFilter = ({className}: Props) => {
	const { isSelected, onSelect } = useQueryFilters()
	const { useFlowersQuery } = useFlowers()
	const { data, isPending, error } = useFlowersQuery()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton
					className={cn('text-nowrap', className)}
					name={`Цветок ${isSelected('flowers').length ? `(${isSelected('flowers').length})` : ''}`}
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{error ? (
					<ErrorMessage message={error} />
				) : isPending ? (
					[...new Array(5)].map((_, index) => (
						<DropdownMenuItem key={index}>
							<Skeleton className='h-6 w-46.25' />
						</DropdownMenuItem>
					))
				) : (
					data.map(flower => (
						<DropdownMenuItem
							onClick={() => onSelect(flower, 'flowers')}
							className={cn(
								'flex cursor-pointer items-center justify-between text-sm font-light',
								isSelected('flowers', flower.id).isSelected &&
									'text-bg-gold'
							)}
							key={flower.id}
						>
							{flower.name}
							{isSelected('flowers', flower.id).isSelected && (
								<Check
									className='text-bg-gold'
									strokeWidth={3}
								/>
							)}
						</DropdownMenuItem>
					))
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
