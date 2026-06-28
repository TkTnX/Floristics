import {
	cn,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	ErrorMessage,
	FilterButton,
	Skeleton,
	useEvents,
	useQueryFilters
} from '@/shared'

import { Check } from 'lucide-react'

export const EventFilter = () => {
	const { useEventsQuery } = useEvents()
	const { data, isPending, error } = useEventsQuery()
	const {  isSelected, onSelect } = useQueryFilters()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton
					className='text-nowrap'
					name={`Событие ${isSelected('events').length ? `(${isSelected('events').length})` : ''}`}
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
					data.map(event => (
						<DropdownMenuItem
							onClick={() => onSelect(event, "events")}
							className={cn(
								'flex cursor-pointer items-center justify-between text-sm font-light',
								isSelected('events', event.id).isSelected &&
									'text-bg-gold'
							)}
							key={event.id}
						>
							{event.name}
							{isSelected('events', event.id).isSelected && (
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
