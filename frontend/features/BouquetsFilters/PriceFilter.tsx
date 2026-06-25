'use client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	FilterButton,
	Input
} from '@/shared'
export const PriceFilter = () => {
	return (
		// TODO: Доделать
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton name='Цена' />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-61.25 px-6 py-5'>
				<div className='flex items-center gap-0.75'>
					<Input className='border-bg-gold h-12.5 max-w-19' />
					<span className='text-text-grey text-sm font-light'>—</span>
					<Input className='border-bg-gold h-12.5 max-w-19' />
					<span className='text-text-grey text-sm font-light'>
						руб
					</span>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
