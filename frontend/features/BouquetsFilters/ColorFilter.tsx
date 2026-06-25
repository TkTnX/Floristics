import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	ErrorMessage,
	FilterButton,
	Skeleton,
	useColors
} from '@/shared'

export const ColorFilter = () => {
	const { useColorsQuery } = useColors()
	const { data, isPending, error } = useColorsQuery()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton name='Основной цвет' />
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
							className='flex cursor-pointer items-center gap-2.5 text-sm font-light'
				
							key={color.id}
						>
							<div
								className='h-5 w-5 rounded-full'
								style={{ backgroundColor: color.hex }}
							/>
							{color.name}
						</DropdownMenuItem>
					))
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
