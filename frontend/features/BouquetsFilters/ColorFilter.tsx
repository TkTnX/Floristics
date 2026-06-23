import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
    FilterButton
} from '@/shared'

export const ColorFilter = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton name='Основной цвет' />
			</DropdownMenuTrigger>
			<DropdownMenuContent></DropdownMenuContent>
		</DropdownMenu>
	)
}
