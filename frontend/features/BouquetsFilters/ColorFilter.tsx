import {
	cn,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	ErrorMessage,
	FilterButton,
	Skeleton,
	useColors,
	useQueryFilters
} from '@/shared'

import { Check } from 'lucide-react'

export const ColorFilter = () => {
	const {  isSelected, onSelect } = useQueryFilters()
	const { useColorsQuery } = useColors()
	const { data, isPending, error } = useColorsQuery()


	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton
					className='text-nowrap'
					name={`Основной цвет ${isSelected('colors').length ? `(${isSelected('colors').length})` : ''}`}
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
					data.map(color => (
						<DropdownMenuItem
							onClick={() => onSelect(color, "colors")}
							className={cn(
								'flex cursor-pointer items-center justify-between text-sm font-light'
							)}
							key={color.id}
						>
							<div
								className={cn(
									'flex items-center gap-2.5',
									isSelected('colors', color.id).isSelected &&
										'text-bg-gold'
								)}
							>
								<div
									className='h-5 w-5 rounded-full'
									style={{ backgroundColor: color.hex }}
								/>
								{color.name}
							</div>
							{isSelected('colors', color.id).isSelected && (
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
