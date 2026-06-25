import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	FilterButton,
	SORT_ITEMS
} from '@/shared'

export const BouquetsSort = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton
					className='border-white bg-white'
					name='Сортировка'
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{SORT_ITEMS.map(item => (
					<DropdownMenuItem
						className='cursor-pointer text-sm font-light'
						key={item.value}
					>
						{item.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
