import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
    FilterButton
} from '@/shared'

export const PriceFilter = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton name='Цена' />
			</DropdownMenuTrigger>
			<DropdownMenuContent></DropdownMenuContent>
		</DropdownMenu>
	)
}
