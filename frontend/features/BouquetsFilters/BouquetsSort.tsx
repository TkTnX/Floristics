import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	FilterButton,
	SORT_ITEMS
} from '@/shared'
import { useState } from 'react'

interface Props {
	setSortBy: React.Dispatch<React.SetStateAction<null | string>>
}

export const BouquetsSort = ({ setSortBy }: Props) => {
	const [name, setName] = useState('Сортировка')
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton
					className='w-full border-white bg-white md:w-45'
					name={name}
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{SORT_ITEMS.map(item => (
					<DropdownMenuItem
						onClick={() => {
							setSortBy(item.value)
							setName(item.label)
						}}
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
