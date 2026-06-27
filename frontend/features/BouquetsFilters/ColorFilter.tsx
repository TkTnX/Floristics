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
import { IColor } from '@/shared/types'
import { Check } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

export const ColorFilter = () => {
	const { setQuery, removeQuery } = useQueryFilters()
	const searchParams = useSearchParams()
	const { useColorsQuery } = useColors()
	const { data, isPending, error } = useColorsQuery()
	const ids = searchParams.get('colors')?.split(',') || []
	const isSelected = (newId: string) =>
		ids.find(item => newId === item.split('-')[0])
	const length = searchParams.get('colors')?.split(',')?.length

	const onClick = (color: IColor) => {
		if (isSelected(color.id)) {
			removeQuery('colors', `${color.id}-${color.name}-colors`)
		} else {
			setQuery('colors', `${color.id}-${color.name}-colors`)
		}
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton
					className='text-nowrap'
					name={`Основной цвет ${length ? `(${length})` : ''}`}
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
							onClick={() => onClick(color)}
							className={cn(
								'flex cursor-pointer items-center justify-between text-sm font-light'
							)}
							key={color.id}
						>
							<div
								className={cn(
									'flex items-center gap-2.5',
									isSelected(color.id) && 'text-bg-gold'
								)}
							>
								<div
									className='h-5 w-5 rounded-full'
									style={{ backgroundColor: color.hex }}
								/>
								{color.name}
							</div>
							{isSelected(color.id) && (
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
