import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
    FilterButton
} from '@/shared'

export const FlowerFilter = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton name='Цветок' />
			</DropdownMenuTrigger>
			<DropdownMenuContent></DropdownMenuContent>
		</DropdownMenu>
	)
}
