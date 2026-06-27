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
import { IEvent } from '@/shared/types'
import { Check } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

export const EventFilter = () => {
	const { useEventsQuery } = useEvents()
	const { data, isPending, error } = useEventsQuery()
	const searchParams = useSearchParams()
	const ids = searchParams.get('events')?.split(',') || []
	const { setQuery, removeQuery } = useQueryFilters()
	const isSelected = (newId: string) =>
		ids.find(item => newId === item.split('-')[0])
	
	const length = searchParams.get('events')?.split(',')?.length
	const onClick = (event: IEvent) => {
		if (isSelected(event.id)) {
			removeQuery('events', `${event.id}-${event.name}-events`)
		} else {
			setQuery('events', `${event.id}-${event.name}-events`)
		}
	}

	// TODO: Весь повторяющийся функционал вынести в отдельный файл
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton
					className='text-nowrap'
					name={`Событие ${length ? `(${length})` : ''}`}
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
							onClick={() => onClick(event)}
							className={cn(
								'flex cursor-pointer items-center justify-between text-sm font-light',
								isSelected(event.id) && 'text-bg-gold'
							)}
							key={event.id}
						>
							{event.name}
							{isSelected(event.id) && (
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
