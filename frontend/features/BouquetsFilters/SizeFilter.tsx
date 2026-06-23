import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
    FilterButton
} from '@/shared'

export const SizeFilter = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton name='Размер букета' />
			</DropdownMenuTrigger>
			<DropdownMenuContent></DropdownMenuContent>
		</DropdownMenu>
	)
}
