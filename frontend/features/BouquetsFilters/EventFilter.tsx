import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	ErrorMessage,
	FilterButton,
	Skeleton,
	useEvents
} from '@/shared'

export const EventFilter = () => {
	const { useEventsQuery } = useEvents()
	const { data, isPending, error } = useEventsQuery()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton name='Событие' />
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
							className='cursor-pointer text-sm font-light'
							key={flower.id}
						>
							{flower.name}
						</DropdownMenuItem>
					))
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
