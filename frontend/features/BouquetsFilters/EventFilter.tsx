import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	FilterButton
} from '@/shared'

export const EventFilter = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton name='Событие' />
			</DropdownMenuTrigger>
			<DropdownMenuContent></DropdownMenuContent>
		</DropdownMenu>
	)
}
